# Generated by Django 5.1.2 on 2025-01-30 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_alter_event_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_budget',
            field=models.FloatField(default=0),
        ),
    ]
