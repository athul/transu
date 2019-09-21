from rest_framework import serializers
from .models import Translator,TranslationMessage

class TMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model=TranslationMessage
        fields=['message','language']
        
class TranslatorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Translator
        fields=['languages']
