from rest_framework import permissions


class IsAuthorOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, hap):
        if request.user:
            return hap.organizer == request.user
        return False

class IsGuestOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, guest):
        if request.user:
            if guest.friend.select.id == request.user.id:
                return True
        return False

    def has_permission(self, request, view):
        if request.user:
            for guest in view.get_queryset():
                if guest.friend.select.id == request.user.id:
                    return True
        return False
