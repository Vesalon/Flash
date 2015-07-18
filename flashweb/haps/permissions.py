from rest_framework import permissions


class IsAuthorOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, hap):
        print('IsAuthorOfHap: working on permissions')
        if request.user:
            return hap.organizer == request.user
        return False

class IsGuestOfHap(permissions.BasePermission):
    def has_object_permission(self, request, view, guest):
        print('IsGuestOfHap.has_object_permission: working on object permissions')
        if request.user:
            #for friend in guests.all():
            if guest.friend.select.id == request.user.id:
                return True
        return False

    def has_permission(self, request, view):
        print('IsGuestOfHap.has_permission: working on list permissions')
        if request.user:
            for guest in view.get_queryset():
                if guest.friend.id == request.user.id:
                    return True
        return True
