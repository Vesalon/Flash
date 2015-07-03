# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_account_signature'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='include_signature',
            field=models.BooleanField(default=False),
        ),
    ]
