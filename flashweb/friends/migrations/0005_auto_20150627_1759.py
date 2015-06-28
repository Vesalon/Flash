# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0004_auto_20150627_1647'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friend',
            name='alias',
            field=models.TextField(),
        ),
    ]
