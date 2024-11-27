# Generated by Django 5.1.3 on 2024-11-26 23:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Funcionario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('data_nascimento', models.DateField()),
                ('endereco', models.CharField(max_length=200)),
                ('telefone', models.CharField(max_length=12)),
                ('formacao_academica', models.CharField(max_length=100)),
                ('experiencia_profissional', models.CharField(max_length=500)),
                ('certificacoes', models.CharField(max_length=200)),
                ('data_criacao', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]