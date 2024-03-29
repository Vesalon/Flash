from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers

from authentication.models import Account

class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Account
        fields = ('id', 'email', 'username', 'created_at', 'updated_at',
                    'first_name', 'last_name', 'password', 'attended',
                    'organized', 'confirm_password', 'signature',
                    'include_signature',)
        read_only_fields = ('created_at', 'updated_at', 'attended',
                            'organized',)

        def create(self, validated_data):
            return Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.username = validated_data.get('username',
                instance.username)

            instance.signature = validated_data.get('signature',
                istance.signature)

            instance.include_signature = validated_data.get(
                'include_signature', istance.include_signature)

            instance.save()

            pasword = validated_data.get('password', None)
            confirm_password = validated_data.get('confirmed_password', None)

            if (password and confirm_password and
                    password == confirmed_password):

                instance.set_password(password)
                instance.save()

            update_session_auth_hash(self.context.get('request'), instance)

            return instance
