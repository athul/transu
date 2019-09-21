from rest_framework import serializers
from .models import Translator,TranslationQuery
from django.contrib.auth.models import User
class TQuerySerializer(serializers.ModelSerializer):
    class Meta:
        model=TranslationQuery
        fields=['query','language']
        
class TranslatorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Translator
        fields= ('__all__')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields= ['first_name','last_name','username','password']