# Generated by Django 4.0.6 on 2022-07-18 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='outcomemetrics',
            name='dep_growth_y2',
            field=models.IntegerField(default=0),
        ),
    ]
