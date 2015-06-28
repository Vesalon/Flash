from rest_framework import serializers

from authentication.serializers import AccountSerializer
from friends.models import Friend


class FriendSerializer(serializers.ModelSerializer):
    orig = AccountSerializer(read_only=True, required=False)
    select = AccountSerializer(required=True)

    class Meta:
        model = Friend

        fields = ('id', 'orig', 'select', 'alias', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(FriendSerializer, self).get_validation_exclusions()

        return exclusions + ['orig']
