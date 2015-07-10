from django.db import models

from authentication.models import Account
from friends.models import Friend

class Hap(models.Model):
    organizer = models.ForeignKey(Account, related_name='organizer')

    title = models.CharField(max_length=200)
    desc = models.TextField()
    time = models.DateTimeField()
    location = models.CharField(max_length=200)

    guest_list = models.ManyToManyField(Friend, through='Guest')

class Guest(models.Model):
    friend = models.ForeignKey(Friend)
    hap = models.ForeignKey(Hap)
    comment = models.CharField(max_length=30)
