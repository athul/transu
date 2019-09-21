from rest_framework import serializers
from .models import Translator,TranslationMessage

class TMessageSerializer(serializers.Serializer):
    class meta:
        model=TranslationMessage
        fields=['message','language']
        
class TranslatorSerializer(serializers.Serializer):
    #message=TMessageSerializer()
    class meta:
        model=Translator
        fields=('languages')
        exclude=['']