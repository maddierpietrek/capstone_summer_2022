# Generated by Django 4.0.5 on 2022-07-19 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0003_opportunities_stage_alter_opportunities_revenue_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='OpportunitiesRevenue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_revenue', models.FloatField(default=0)),
                ('stage', models.CharField(default='Stage 1', max_length=200)),
                ('date_closed', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='opportunities',
            name='year',
            field=models.IntegerField(default=0),
        ),
    ]