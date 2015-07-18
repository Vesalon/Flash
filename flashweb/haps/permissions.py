from rest_framework import permissions


class IsAuthorOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, hap):
        if request.user:
            return hap.organizer == request.user
        return False

class IsGuestOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, guests):
        if request.user:
            for friend in guests.all():
                if friend.id == request.user.id:
                    return True
        return False
