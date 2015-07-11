from django.db import models
from authentication.models import Account

class Friend(models.Model):
    orig = models.ForeignKey(Account, related_name='friend_origs')
    select = models.ForeignKey(Account, related_name='friend_selects')
    #print self.select.username
    alias = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('orig', 'select')
        #ordering = ['alias']

    def __unicode__(self):
        return '{0} : {1}'.format(self.orig.username, self.select.username)

    def __init__(self, *args, **kwargs):
        super(Friend, self).__init__(*args, **kwargs)
        if not self.alias and self.select:
            self.alias = self.select.username

"""
    def save(self, *args, **kwargs):
        if not self.alias:
            self.alias = self.select.username
        super(Friend, self).save(*args, **kwargs)
"""
