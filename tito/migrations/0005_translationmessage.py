# Generated by Django 2.2.5 on 2019-09-21 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tito', '0004_remove_translator_fullname'),
    ]

    operations = [
        migrations.CreateModel(
            name='TranslationMessage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(blank=True)),
            ],
        ),
    ]