from django.db import models
from multiselectfield import MultiSelectField
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User

LANG_CHOICE = (
    ('en','english'),
    ('ml','malayalam'),
    ('hi','hindi'),
    ('ta','tamil'),
    ('kn','kannada'),
    ('ur','urdu'),
    ('ma','marati'),
)

class Translator(models.Model):
    upvote = models.PositiveIntegerField(null=True)
    languages = MultiSelectField(min_choices=1,choices=LANG_CHOICE,default='')
    response = models.TextField(blank=True)


class TranslationQuery(models.Model):
    query = models.TextField(blank=True)
    language = models.CharField(choices=LANG_CHOICE,blank=True,max_length=3)
