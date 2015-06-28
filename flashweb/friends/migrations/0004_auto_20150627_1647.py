# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0003_friend_alias'),
    ]

    operations = [
        migrations.RenameField(
            model_name='friend',
            old_name='orig_id',
            new_name='orig',
        ),
        migrations.RenameField(
            model_name='friend',
            old_name='select_id',
            new_name='select',
        ),
    ]
