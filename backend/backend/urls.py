"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from rest_framework import routers
from crm import views

from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include 

urlpatterns = [
    path('admin/', admin.site.urls),
    #re_path(r'^api/user/$', views.user_info),
    re_path(r'^api/profiles/$', views.profiles_list),
    re_path(r'^api/profile/(?P<pk>[0-9]+)$', views.profile_info),
    re_path(r'^api/client/(?P<pk>[0-9]+)$', views.client_info),
    re_path(r'^api/summary1/(?P<pk>[0-9]+)$', views.summary1_info),
    re_path(r'^api/summary2/(?P<pk>[0-9]+)$', views.summary2_info),
    re_path(r'^api/outcome/(?P<pk>[0-9]+)$', views.outcome_metrics_info),
    re_path(r'^api/behavior/(?P<pk>[0-9]+)$', views.behavior_metrics_info),
    re_path(r'^api/opportunities/$', views.opportunities_list),
]
