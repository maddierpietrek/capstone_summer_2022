from django.db import models

# Create your models here.
class Profile(models.Model):
    avatar = models.CharField(max_length=200, blank=False, default='')
    manager = models.CharField(max_length=200, blank=False, default='')
    name = models.CharField(max_length=200, blank=False, default='')
    hire_date = models.DateField(blank=True, null=True)
    role = models.CharField(max_length=200, blank=False, default='')

    def __str__(self):
        return self.name

class Client(models.Model):
    relationships = models.IntegerField(blank=False, default=0)
    credit_relationships= models.IntegerField(blank=False, default=0)
    top_prospects = models.IntegerField(blank=False, default=0)
    ttm_revenue = models.IntegerField(blank=False, default=0)
    suspects = models.IntegerField(blank=False, default=0)

class Summary1(models.Model):
    avg_loan = models.IntegerField(blank=False, default=0)
    avg_credit = models.IntegerField(blank=False, default=0)
    deposit_bal = models.IntegerField(blank=False, default=0)

class Summary2(models.Model):
    avg_loan = models.FloatField(blank=False, default=0)
    avg_credit = models.FloatField(blank=False, default=0)
    deposit_bal = models.FloatField(blank=False, default=0)

class OutcomeMetrics(models.Model):
    loan_prod_y1 = models.IntegerField(blank=False, default=0)
    loan_prod_y2 = models.IntegerField(blank=False, default=0)
    dep_growth_y1 = models.IntegerField(blank=False, default=0)
    dep_growth_y2 = models.IntegerField(blank=False, default=0)
    tm_growth_y1 = models.IntegerField(blank=False, default=0)
    tm_growth_y2 = models.IntegerField(blank=False, default=0)
    new_clients_y1 = models.IntegerField(blank=False, default=0)
    new_clients_y2 = models.IntegerField(blank=False, default=0)

class BehaviorMetrics(models.Model):
    avg_overall_rm_sat_y1 = models.IntegerField(blank=False, default=0)
    avg_overall_rm_sat_y2 = models.IntegerField(blank=False, default=0)
    client_calls_y1 = models.IntegerField(blank=False, default=0)
    client_calls_y2 = models.IntegerField(blank=False, default=0)
    prospect_calls_y1 = models.IntegerField(blank=False, default=0)
    prospect_calls_y2 = models.IntegerField(blank=False, default=0)
    strat_uploaded_y1 = models.IntegerField(blank=False, default=0)
    strat_uploaded_y2 = models.IntegerField(blank=False, default=0)

class Opportunities(models.Model):
    client_name = models.CharField(max_length=200)
    product_type = models.CharField(max_length=200)
    stage = models.CharField(max_length=200, default="Stage 1")
    sales_stage = models.CharField(max_length=200)
    revenue = models.FloatField(blank=False, default=0)
    date_closed = models.DateField(blank=True, null=True)
    year = models.IntegerField(blank=False, default=0)

    def __str__(self):
        return self.client_name

class OpportunitiesRevenue(models.Model):
    total_revenue = models.FloatField(blank=False, default=0)
    stage = models.CharField(max_length=200, default="Stage 1")
    year = models.IntegerField(blank=False, default=0)
