# Generated by Django 5.1.2 on 2025-01-30 05:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('events', '0002_alter_event_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Budget',
            fields=[
                ('budget_id', models.AutoField(primary_key=True, serialize=False)),
                ('budget_name', models.CharField(max_length=200)),
                ('budget_amount', models.FloatField()),
                ('budget_date', models.DateField()),
                ('budget_notes', models.TextField()),
                ('budget_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
    ]
