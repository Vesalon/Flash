from rest_framework import serializers

from authentication.serializers import AccountSerializer
from friends.serializers import FriendSerializer
from haps.models import Hap


class HapSerializer(serializers.ModelSerializer):
    organizer = AccountSerializer(read_only=True, required=False)

    class Meta:
        model = Hap

        fields = ('id', 'organizer', 'title', 'desc', 'time',
                    'location', 'guest_list')
        read_only_fields = ('id')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(HapSerializer, self).get_validation_exclusions()
        exclusions = super(FriendSerializer, self).get_validation_exclusions()
        exclusions = super(AccountSerializer, self).get_validation_exclusions()

        return exclusions + ['organizer']
