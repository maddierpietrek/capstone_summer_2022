from django.contrib import admin
from .models import Profile, Client, Summary1, Summary2, OutcomeMetrics, BehaviorMetrics, Opportunities

# Register your models here.
admin.site.register(Profile)
admin.site.register(Client)
admin.site.register(Summary1)
admin.site.register(Summary2)
admin.site.register(OutcomeMetrics)
admin.site.register(BehaviorMetrics)
admin.site.register(Opportunities)