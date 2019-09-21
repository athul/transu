from django.db import models
from multiselectfield import MultiSelectField
from django.contrib.auth.models import User
# Create your models here.

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
    username = models.CharField(max_length=100, unique=True)
    fullname = models.CharField(max_length=100)
    reputation = models.PositiveIntegerField()
    languages = MultiSelectField(min_choices=1,choices=LANG_CHOICE,default='')

