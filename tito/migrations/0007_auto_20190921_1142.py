# Generated by Django 2.2.5 on 2019-09-21 11:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tito', '0006_translationmessage_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='translator',
            name='user',
            field=models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
