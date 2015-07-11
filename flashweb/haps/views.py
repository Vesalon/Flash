from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from haps.models import Hap
from haps.permissions import IsAuthorOfHap
from haps.serializers import HapSerializer
from friends.serializers import FriendSerializer
from datetime import datetime, timedelta


class HapViewSet(viewsets.ModelViewSet):
    queryset = Hap.objects.order_by('-time')
    serializer_class = HapSerializer
    other_serializer_class = FriendSerializer
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
            other_serializer = self.other_serializer_class(
                data=request.data.get('guest_list'),
                many=True
            )
        except Exception, e:
            print(e)

        if serializer.is_valid():
            h = Hap.objects.create(organizer=request.user,
                **serializer.validated_data)
            print(h)
            print(serializer.validated_data)
            print('\n\n')
            print(serializer.initial_data)
            print('\n\n')

            # try:
            #     for friend in serializer.validated_data.get('guests'):
            #         print(friend)
            # except Exception, e:
            #     print(e)

            if other_serializer.is_valid():
                print(other_serializer.validated_data)
                for friend in other_serializer.validated_data:
                    Guest.objects.create(friend=friend, hap=h)

                return Response(serializer.validated_data,
                        status=status.HTTP_201_CREATED)
            else:
                print(other_serializer.errors)
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
