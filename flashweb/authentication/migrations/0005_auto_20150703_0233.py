# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_account_include_signature'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='signature',
            field=models.TextField(default=b''),
        ),
    ]
