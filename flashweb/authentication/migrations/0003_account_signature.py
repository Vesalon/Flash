# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20150619_1850'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='signature',
            field=models.CharField(default=b'', max_length=50),
        ),
    ]
