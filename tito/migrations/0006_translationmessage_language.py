# Generated by Django 2.2.5 on 2019-09-21 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tito', '0005_translationmessage'),
    ]

    operations = [
        migrations.AddField(
            model_name='translationmessage',
            name='language',
            field=models.CharField(blank=True, choices=[('en', 'english'), ('ml', 'malayalam'), ('hi', 'hindi'), ('ta', 'tamil'), ('kn', 'kannada'), ('ur', 'urdu'), ('ma', 'marati')], max_length=3),
        ),
    ]
