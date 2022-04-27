from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

app_name = 'api_memo'

## Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'memo', views.MemoViewSet)


urlpatterns = [
    path('v1/', include(router.urls)),
]