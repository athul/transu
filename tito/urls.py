from django.urls import path,include
from .views import TranslatorAPI,QueryAPI,UserAPI
from rest_framework import routers   

router=routers.DefaultRouter()
router.register(r'translator',TranslatorAPI)
router.register(r'query',QueryAPI)
router.register(r'users',UserAPI)

urlpatterns = [
    path('',include(router.urls))
]