# Generated by Django 4.2.2 on 2023-07-17 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('panel', '0011_alter_student_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subjectscore',
            name='score',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
