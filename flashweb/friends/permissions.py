from rest_framework import permissions


class IsOrigOfFriend(permissions.BasePermission):
    def has_object_permission(self, request, view, friend):
        if request.user:
            return friend.orig == request.user
        return False
