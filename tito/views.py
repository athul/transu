from django.shortcuts import render
from .forms import QueryForm
from rest_framework import viewsets
from .models import Translator,TranslationQuery
from django.contrib.auth.models import User
from .serializers import TQuerySerializer,TranslatorSerializer,UserSerializer

class TranslatorAPI(viewsets.ModelViewSet):
    queryset=Translator.objects.all()
    serializer_class=TranslatorSerializer
class QueryAPI(viewsets.ModelViewSet):
    queryset=TranslationQuery.objects.all()
    serializer_class=TQuerySerializer
class UserAPI(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
def queryAdd(request):
    form=QueryForm(request.POST or None)
    if form.is_valid():
        form.save()
        form=QueryForm()
    context={
        'form':form
    }
    return render(request,"tito/qadd.html",context)