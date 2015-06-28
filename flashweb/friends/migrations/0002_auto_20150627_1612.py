# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('friends', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='friend',
            name='author',
        ),
        migrations.AddField(
            model_name='friend',
            name='orig_id',
            field=models.ForeignKey(related_name='friend_origs', default=1, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='friend',
            name='select_id',
            field=models.ForeignKey(related_name='friend_selects', default=2, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
