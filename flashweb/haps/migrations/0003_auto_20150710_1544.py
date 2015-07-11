# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('friends', '0005_auto_20150627_1759'),
        ('haps', '0002_remove_hap_guests'),
    ]

    operations = [
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('comment', models.CharField(max_length=30)),
                ('friend', models.ForeignKey(to='friends.Friend')),
                ('hap', models.ForeignKey(to='haps.Hap')),
            ],
        ),
        migrations.AddField(
            model_name='hap',
            name='guest_list',
            field=models.ManyToManyField(to='friends.Friend', through='haps.Guest'),
        ),
    ]
