from django.contrib import admin
from .models import Translator, TranslationQuery
# Register your models here.
admin.site.register(Translator)
admin.site.register(TranslationQuery)
