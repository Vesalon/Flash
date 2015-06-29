from rest_framework import permissions, viewsets
from rest_framework.response import Response

from haps.models import Hap
from haps.permissions import IsAuthorOfHap
from haps.serializers import HapSerializer


class HapViewSet(viewsets.ModelViewSet):
    queryset = Hap.objects.order_by('-time')
    serializer_class = HapSerializer
    def get_permissions(self):
        print('~~~~~~' + self.request.method + '~~~~~~')
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsAuthorOfHap(),)

    def perform_create(self, serializer):
        print('^^^^^^' + self.request.method + '^^^^^^')
        instance = serializer.save(organizer=self.request.user)

        return super(HapViewSet, self).perform_create(serializer)



class AccountHapsViewSet(viewsets.ViewSet):
    queryset = Hap.objects.select_related('organizer').all()
    serializer_class = HapSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(organizer__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
