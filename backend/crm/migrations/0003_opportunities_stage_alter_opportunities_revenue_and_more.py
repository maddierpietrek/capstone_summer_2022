# Generated by Django 4.0.6 on 2022-07-19 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0002_outcomemetrics_dep_growth_y2'),
    ]

    operations = [
        migrations.AddField(
            model_name='opportunities',
            name='stage',
            field=models.CharField(default='Stage 1', max_length=200),
        ),
        migrations.AlterField(
            model_name='opportunities',
            name='revenue',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='summary2',
            name='avg_credit',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='summary2',
            name='avg_loan',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='summary2',
            name='deposit_bal',
            field=models.FloatField(default=0),
        ),
    ]