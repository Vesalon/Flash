# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('haps', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hap',
            name='guests',
        ),
    ]
