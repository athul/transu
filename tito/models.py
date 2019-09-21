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
    user = models.OneToOneField(User, on_delete=models.CASCADE,default='')
    reputation = models.PositiveIntegerField()
    languages = MultiSelectField(min_choices=1,choices=LANG_CHOICE,default='')

@receiver(post_save, sender=User)
def create_user_translator(sender, instance, created, **kwargs):
    if created:
        Translator.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_translator(sender, instance, **kwargs):
    instance.user.save()


