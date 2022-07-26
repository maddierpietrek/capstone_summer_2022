# Generated by Django 4.0.6 on 2022-07-14 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BehaviorMetrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avg_overall_rm_sat_y1', models.IntegerField(default=0)),
                ('avg_overall_rm_sat_y2', models.IntegerField(default=0)),
                ('client_calls_y1', models.IntegerField(default=0)),
                ('client_calls_y2', models.IntegerField(default=0)),
                ('prospect_calls_y1', models.IntegerField(default=0)),
                ('prospect_calls_y2', models.IntegerField(default=0)),
                ('strat_uploaded_y1', models.IntegerField(default=0)),
                ('strat_uploaded_y2', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('relationships', models.IntegerField(default=0)),
                ('credit_relationships', models.IntegerField(default=0)),
                ('top_prospects', models.IntegerField(default=0)),
                ('ttm_revenue', models.IntegerField(default=0)),
                ('suspects', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Opportunities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_name', models.CharField(max_length=200)),
                ('product_type', models.CharField(max_length=200)),
                ('sales_stage', models.CharField(max_length=200)),
                ('revenue', models.IntegerField(default=0)),
                ('date_closed', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='OutcomeMetrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('loan_prod_y1', models.IntegerField(default=0)),
                ('loan_prod_y2', models.IntegerField(default=0)),
                ('dep_growth_y1', models.IntegerField(default=0)),
                ('tm_growth_y1', models.IntegerField(default=0)),
                ('tm_growth_y2', models.IntegerField(default=0)),
                ('new_clients_y1', models.IntegerField(default=0)),
                ('new_clients_y2', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.CharField(default='', max_length=200)),
                ('manager', models.CharField(default='', max_length=200)),
                ('name', models.CharField(default='', max_length=200)),
                ('hire_date', models.DateField(blank=True, null=True)),
                ('role', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Summary1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avg_loan', models.IntegerField(default=0)),
                ('avg_credit', models.IntegerField(default=0)),
                ('deposit_bal', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Summary2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avg_loan', models.IntegerField(default=0)),
                ('avg_credit', models.IntegerField(default=0)),
                ('deposit_bal', models.IntegerField(default=0)),
            ],
        ),
    ]
