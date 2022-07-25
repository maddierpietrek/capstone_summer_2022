from http import client
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import ProfileSerializer, OpportunitiesRevenueSerializer, ClientSerializer, Summary1Serializer, Summary2Serializer, OutcomeMetricsSerializer, BehaviorMetricsSerializer, OpportunitiesSerializer
from .models import Profile, Client, Summary1, Summary2, OutcomeMetrics, BehaviorMetrics, Opportunities
from django.db.models import Sum
import json


# Create your views here.
@api_view(['GET'])
def profiles_list(request):
   if request.method == 'GET':
        profiles = Profile.objects.all()

        profile_serializer = ProfileSerializer(profiles, many=True)
        return JsonResponse(profile_serializer.data, safe=False)

@api_view(['GET'])
def profile_info(request, pk):
    if request.method == 'GET':
        profile = Profile.objects.filter(pk=pk)

        profile_serializer = ProfileSerializer(profile, many=True)
        return JsonResponse(profile_serializer.data, safe=False)

@api_view(['GET'])
def client_info(request, pk):
    if request.method == 'GET':
        client = Client.objects.filter(pk=pk)

        client_serializer = ClientSerializer(client, many=True)
        return JsonResponse(client_serializer.data, safe=False)

@api_view(['GET'])
def summary1_info(request, pk):
    if request.method == 'GET':
        summary1 = Summary1.objects.filter(pk=pk)

        summary1_serializer = Summary1Serializer(summary1, many=True)
        return JsonResponse(summary1_serializer.data, safe=False)

@api_view(['GET'])
def summary2_info(request, pk):
    if request.method == 'GET':
        summary2 = Summary2.objects.filter(pk=pk)

        summary2_serializer = Summary2Serializer(summary2, many=True)
        return JsonResponse(summary2_serializer.data, safe=False)

@api_view(['GET'])
def outcome_metrics_info(request, pk):
    if request.method == 'GET':
        outcome = OutcomeMetrics.objects.filter(pk=pk)

        outcome_serializer = OutcomeMetricsSerializer(outcome, many=True)
        return JsonResponse(outcome_serializer.data, safe=False)

@api_view(['GET'])
def behavior_metrics_info(request, pk):
    if request.method == 'GET':
        behavior = BehaviorMetrics.objects.filter(pk=pk)

        behavior_serializer = BehaviorMetricsSerializer(behavior, many=True)
        return JsonResponse(behavior_serializer.data, safe=False)

@api_view(['GET'])
def opportunities_list(request):
    if request.method == 'GET':
        opportunities = Opportunities.objects.all()
        
        opportunity_serializer = OpportunitiesSerializer(opportunities, many=True)
        return JsonResponse(opportunity_serializer.data, safe=False)

@api_view(['GET'])
def opportunities_revenue(request):
    if request.method == 'GET':
        # opportunities = Opportunities.objects.values('stage', 'year').order_by('stage').annotate(total_revenue = Sum('revenue'))
        opportunities = [{'stage': 'Stage 1', 'year': 2021, 'total_revenue': 4.81}, {'stage': 'Stage 1', 'year': 2022, 'total_revenue': 4.81}, {'stage': 'Stage 2', 'year': 2021, 'total_revenue': 5.67}, {'stage': 'Stage 4', 'year': 2021, 'total_revenue': 3.78}, {'stage': 'Stage 4', 'year': 2022, 'total_revenue': 3.78}]
        print(list(opportunities))
        opportunities_revenues = { opportunity['stage']:[] for opportunity in list(opportunities) }
        for opportunity in list(opportunities):
            opportunities_revenues.get(opportunity['stage']).append({'year':opportunity['year'], 'total_revenue':opportunity['total_revenue']})
        print(list(opportunities_revenues))


        opportunities_revenue_serializer = OpportunitiesRevenueSerializer(opportunities_revenue, many=True)
        return JsonResponse(opportunities_revenue_serializer.data, safe=False)