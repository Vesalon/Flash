# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0005_auto_20150627_1759'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='friend',
            unique_together=set([('orig', 'select')]),
        ),
    ]
