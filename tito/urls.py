from django.urls import path,include
from . import views
from rest_framework import routers   

router=routers.DefaultRouter()
router.register(r'translator',views.TranslatorAPI)
router.register(r'query',views.QueryAPI)
router.register(r'users',views.UserAPI)

urlpatterns = [
    path('',include(router.urls)),
    path('qadd/',views.queryAdd, name='qadd'),
]