from rest_framework import serializers

from authentication.serializers import AccountSerializer
from friends.serializers import FriendSerializer
from haps.models import Hap, Guest


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

class GuestSerializer(serializers.ModelSerializer):
    friend = FriendSerializer(required=True)
    hap = HapSerializer(required=True)

    class Meta:
        model = Guest

        fields = ('id', 'friend', 'hap', 'status', 'comment')
        read_only_fields = ('id')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(GuestSerializer, self).get_validation_exclusions()
        exclusions = super(HapSerializer, self).get_validation_exclusions()
        exclusions = super(FriendSerializer, self).get_validation_exclusions()
        exclusions = super(AccountSerializer, self).get_validation_exclusions()

        return exclusions + ['friend', 'hap']


class GuestHelperSerializer(serializers.ModelSerializer):
    status = serializers.IntegerField()
    comment = serializers.CharField(max_length=30)
