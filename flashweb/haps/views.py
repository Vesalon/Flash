from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from haps.models import Hap, Guest
from friends.models import Friend
from haps.permissions import IsAuthorOfHap, IsGuestOfHap
from haps.serializers import HapSerializer, GuestSerializer, GuestHelperSerializer
from datetime import datetime, timedelta

from django.db.models import Q

class HapViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = Hap.objects.order_by('-time')
    serializer_class = HapSerializer
    def get_permissions(self):
        # if self.request.method in permissions.SAFE_METHODS:
        #     return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),
                IsAuthorOfHap(),
            )

    def create(self, request):
        print(request.data)
        try:
            serializer = self.serializer_class(data=request.data)
            # other_serializer = self.other_serializer_class(
            #     data=request.data.get('friend_ids'),
            #     many=True
            # )
            friend_ids = request.data.get('friend_ids')
        except Exception, e:
            print(e)

        if serializer.is_valid():
            hap = Hap.objects.create(organizer=request.user,
                **serializer.validated_data)
            print(hap)
            print(serializer.validated_data)
            print('\n\n')
            print(serializer.initial_data)
            print('\n\n')

            for x in friend_ids:
                try:
                    int(x)
                    friend = Friend.objects.get(id=x)
                    Guest.objects.create(friend=friend, hap=hap)
                except Exception, e:
                    print(e)

            return Response(serializer.validated_data,
                    status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)

class AccountHapsViewSet(viewsets.ViewSet):
    queryset = Hap.objects.select_related('organizer').filter(
    time__range=[datetime.now(),
    datetime.now()+timedelta(days=365)]).order_by('time')

    serializer_class = HapSerializer

    def list(self, request, account_username=None):
        try:
            # queryset = self.queryset.filter(
            #     organizer__username=account_username)
            #     # | Q(guest_list__friend__username=account_username))
            # queryset = self.queryset.filter(
            #     guest_list__friend__select__username=account_username)
            queryset = self.queryset.raw(
            '''select h.*
            		from haps_hap h
            		join haps_guest g on h.id = g.hap_id
            		join friends_friend f on g.friend_id = f.id
            		join authentication_account a on f.select_id  = a.id
            		where a.username = %s
            	union
            	select h.*
            		from haps_hap h
            		join authentication_account a on h.organizer_id  = a.id
            		where a.username = %s''',
            	[account_username, account_username])
            serializer = self.serializer_class(queryset, many=True)
        except Exception, e:
            print(e)
        return Response(serializer.data)

class HapGuestViewSet(viewsets.ModelViewSet):
    print('working1')
    queryset = Guest.objects.none() #.all()
    print('working2')
    serializer_class = GuestSerializer
    print('working3')


    def get_permissions(self):
        print('HapGuestViewSet: reached get_permissions')
        x = (permissions.IsAuthenticated(),
                IsGuestOfHap()
            )
        #print(x)
        return x

    def list(self, request, hap_id=None):
        hap = Hap.objects.get(id=hap_id)
        #queryset=self.queryset.filter(hap=hap)
        queryset = Guest.objects.filter(hap=hap)
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def put(self, request, hap_id=None):
        # serializer = self.serializer_class(data=request.data)
        print('update started')
        print('\n\n\n')
        print(request.method)
        print(request.user)
        print(request.data)
        print('\n\n\n')
        try:
            acc = request.user
            h = Hap.objects.get(id=hap_id)
            f = Friend.objects.get(orig=h.organizer, select=acc)
            guest = Guest.objects.get(hap=h, friend=f)
            self.check_object_permissions(request, guest)
            guest.status = request.data.get('status')
            guest.comment = request.data.get('comment')
            guest.save()
            return Response(request.data,
                    status=status.HTTP_201_CREATED)
        except Exception, e:
            print(e)
