from django.db import models

from authentication.models import Account

class Hap(models.Model):
    organizer = models.ForeignKey(Account, related_name='organizer')

    title = models.CharField(max_length=200)
    desc = models.TextField()
    time = models.DateTimeField()
    location = models.CharField(max_length=200)
    guests = models.ManyToManyField(Account, related_name='guests')
