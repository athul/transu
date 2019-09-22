from django.forms import ModelForm
from .models import Translator,TranslationQuery

class QueryForm(ModelForm):
    class Meta:
        model = TranslationQuery
        fields = ('__all__')

class TranslationForm(ModelForm):
    class Meta:
        model = Translator
        fields = ('__all__')