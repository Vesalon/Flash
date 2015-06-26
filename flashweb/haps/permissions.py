from rest_framework import permissions


class IsAuthorOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, hap):
        if request.user:
            return hap.organizer == request.organizer
        return False
