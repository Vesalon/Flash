#from django.shortcuts import render

from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from friends.models import Friend
from friends.permissions import IsOrigOfFriend
from friends.serializers import FriendSerializer

from authentication.models import Account


class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.order_by('-alias')
    serializer_class = FriendSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        x = (permissions.IsAuthenticated(), IsOrigOfFriend(),)
        print(x[1])
        return x


    def create(self, request):
        # instance = serializer.save(orig=self.request.user)
        #
        # return super(FriendViewSet, self).perform_create(serializer)
        # print('^^^^^^' + self.request.method + '^^^^^^')
        # serializer = self.serializer_class(data=request.data)
        #
        # if serializer.is_valid():
        #     Hap.objects.create(orig=request.user,
        #         **serializer.validated_data)
        #     return Response(serializer.validated_data,
        #             status=status.HTTP_201_CREATED)
        print('^^^^^^' + self.request.method + '^^^^^^')
        try:
            serializer = self.serializer_class(data=request.data)

            print('hello1')
            print(serializer.initial_data)
            sel = Account.objects.get(username=serializer.initial_data.get('select'))
            print(sel)
            Friend.objects.create(orig=request.user,
                select=sel)
            print('hello2')
            return Response(serializer.initial_data,
                    status=status.HTTP_201_CREATED)
        except Exception, e:
            print('---------------')
            print(e)





class AccountFriendsViewSet(viewsets.ViewSet):
    queryset = Friend.objects.select_related('orig').all()
    serializer_class = FriendSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(orig__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
