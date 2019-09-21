from django.shortcuts import render
from rest_framework import viewsets
from .models import Translator,TranslationMessage
from .serializers import TMessageSerializer,TranslatorSerializer

class TranslatorAPI(viewsets.ModelViewSet):
    queryset=Translator.objects.all()
    serializer_class=TranslatorSerializer
class MessageAPI(viewsets.ModelViewSet):
    queryset=TranslationMessage.objects.all()
    serializer_class=TMessageSerializer