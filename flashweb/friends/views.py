#from django.shortcuts import render

from rest_framework import permissions, viewsets
from rest_framework.response import Response

from friends.models import Friend
from friends.permissions import IsOrigOfFriend
from friends.serializers import FriendSerializer


class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.order_by('-alias')
    serializer_class = FriendSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsOrigOfFriend(),)

def perform_create(self, serializer):
    instance = serializer.save(orig=self.request.user)

    return super(FriendViewSet, self).perform_create(serializer)



class AccountFriendsViewSet(viewsets.ViewSet):
    queryset = Friend.objects.select_related('orig').all()
    serializer_class = FriendSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(orig__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
