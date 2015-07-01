from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from haps.models import Hap
from haps.permissions import IsAuthorOfHap
from haps.serializers import HapSerializer


class HapViewSet(viewsets.ModelViewSet):
    queryset = Hap.objects.order_by('-time')
    serializer_class = HapSerializer
    def get_permissions(self):
        print('~~~~~~' + self.request.method + '~~~~~~')
        print(self.request.data)
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        x = (permissions.IsAuthenticated(),
                IsAuthorOfHap(),
            )
        print(x[1])
        return x

    # def perform_create(self, serializer):
    #     print('^^^^^^' + self.request.method + '^^^^^^')
    #     instance = serializer.save(organizer=self.request.user)
    #
    #     return super(HapViewSet, self).perform_create(serializer)

    def create(self, request):
        print('^^^^^^' + self.request.method + '^^^^^^')
        try:
            serializer = self.serializer_class(data=request.data)

            print('hello1')
            if serializer.is_valid():
                Hap.objects.create(organizer=request.user,
                    **serializer.validated_data)
                print('hello2')
                return Response(serializer.validated_data,
                        status=status.HTTP_201_CREATED)
        except Exception, e:
            print('---------------')
            print(e)


class AccountHapsViewSet(viewsets.ViewSet):
    queryset = Hap.objects.select_related('organizer').all()
    serializer_class = HapSerializer

    def list(self, request, account_username=None):
        queryset = self.queryset.filter(organizer__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
