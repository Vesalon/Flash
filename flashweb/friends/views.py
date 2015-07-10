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
        return (permissions.IsAuthenticated(),
            IsOrigOfFriend(),
        )

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        print(serializer.initial_data)
        try:
            sel = Account.objects.get(username=serializer.initial_data.get('select'))
        except Exception, e:
            print('no account with that username')
            return Response(serializer.initial_data,
                    status=status.HTTP_400_BAD_REQUEST)
        Friend.objects.create(orig=request.user,
            select=sel)
        return Response(serializer.initial_data,
                status=status.HTTP_201_CREATED)





class AccountFriendsViewSet(viewsets.ViewSet):
    queryset = Friend.objects.select_related('orig').all()
    serializer_class = FriendSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(orig__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
