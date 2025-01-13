# Generated by Django 5.1.3 on 2025-01-13 08:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('events', '0002_alter_event_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Guest',
            fields=[
                ('guest_id', models.AutoField(primary_key=True, serialize=False)),
                ('guest_name', models.CharField(max_length=200)),
                ('guest_phone', models.CharField(max_length=200)),
                ('guest_email', models.CharField(max_length=200)),
                ('guest_address', models.TextField()),
                ('guest_gender', models.CharField(max_length=200)),
                ('guest_rsvp', models.BooleanField(default=False)),
                ('guest_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
    ]
