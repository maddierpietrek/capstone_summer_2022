from rest_framework import serializers
from .models import Profile, Client, Summary1, Summary2, OutcomeMetrics, BehaviorMetrics, Opportunities

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'avatar', 'name', 'hire_date', 'manager', 'role')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'relationships', 'credit_relationships', 'top_prospects', 'ttm_revenue', 'suspects')

class Summary1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Summary1
        fields = ('id', 'avg_loan', 'avg_credit', 'deposit_bal')

class Summary2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Summary2
        fields = ('id', 'avg_loan', 'avg_credit', 'deposit_bal')

class OutcomeMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OutcomeMetrics
        fields = ('id', 'loan_prod_y1', 'loan_prod_y2', 'dep_growth_y1', 'dep_growth_y2', 'tm_growth_y1', 'tm_growth_y2', 'new_clients_y1', 'new_clients_y2')

class BehaviorMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BehaviorMetrics
        fields = ('id', 'avg_overall_rm_sat_y1', 'avg_overall_rm_sat_y2', 'client_calls_y1', 'client_calls_y2', 'prospect_calls_y1', 'prospect_calls_y2', 'strat_uploaded_y1', 'strat_uploaded_y2')

class OpportunitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunities
        fields = ('id', 'client_name', 'product_type', 'stage', 'sales_stage', 'revenue', 'date_closed')