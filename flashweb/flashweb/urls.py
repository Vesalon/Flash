"""flashweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin

from rest_framework import routers
from rest_framework_nested import routers

from authentication.views import AccountViewSet, LoginView, LogoutView
from flashweb.views import IndexView

from haps.views import AccountHapsViewSet, HapViewSet, HapGuestViewSet
from friends.views import AccountFriendsViewSet, FriendViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'haps', HapViewSet)
router.register(r'friends', FriendViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)
accounts_router.register(r'haps', AccountHapsViewSet)
accounts_router.register(r'friends', AccountFriendsViewSet)

haps_router = routers.NestedSimpleRouter(
    router, r'haps', lookup='hap'
)

haps_router.register(r'guests', HapGuestViewSet)

urlpatterns = [
    # '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v1/',  include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/', include(haps_router.urls)),

    url('^.*$', IndexView.as_view(), name='index'),
]
