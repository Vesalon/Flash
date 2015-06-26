# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Hap',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=200)),
                ('desc', models.TextField()),
                ('time', models.DateTimeField()),
                ('location', models.CharField(max_length=200)),
                ('guests', models.ManyToManyField(related_name='guests', to=settings.AUTH_USER_MODEL)),
                ('organizer', models.ForeignKey(related_name='organizer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
