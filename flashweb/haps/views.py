from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from haps.models import Hap, Guest
from friends.models import Friend
from haps.permissions import IsAuthorOfHap
from haps.serializers import HapSerializer
from datetime import datetime, timedelta


class HapViewSet(viewsets.ModelViewSet):
    queryset = Hap.objects.order_by('-time')
    serializer_class = HapSerializer
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
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
        queryset = self.queryset.filter(organizer__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
