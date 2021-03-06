from django import forms
from .models import Translator,TranslationQuery
LANG_CHOICE = (
    ('Eng','english'),
    ('Mal','malayalam'),
    ('Hin','hindi'),
    ('Tam','tamil'),
    ('Kan','kannada'),
    ('Urd','urdu'),
    ('Mar','marati'),
)
class QueryForm(forms.ModelForm):
    query=forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Message",
    "class":"form-control"}))
    language=forms.ChoiceField(widget=forms.Select(attrs={"class":"btn btn-primary dropdown-toggle"}),choices=LANG_CHOICE)
    class Meta:
        model = TranslationQuery
        fields = ('__all__')

class TranslationForm(forms.ModelForm):
    class Meta:
        model = Translator
        fields = ('__all__')