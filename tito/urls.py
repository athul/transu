from django.urls import path,include
from .views import TranslatorAPI,MessageAPI
from rest_framework import routers   

router=routers.DefaultRouter()
router.register(r'translator',TranslatorAPI)
router.register(r'messages',MessageAPI)

urlpatterns = [
    path('',include(router.urls))
]