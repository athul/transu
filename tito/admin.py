from django.contrib import admin
from .models import Translator, TranslationMessage
# Register your models here.
admin.site.register(Translator)
admin.site.register(TranslationMessage)
