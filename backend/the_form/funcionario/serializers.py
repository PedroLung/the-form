from rest_framework import serializers
from .models import Funcionario

class FuncionarioSerializer(serializers.ModelSerializer):
  class Meta:
    model = Funcionario
    fields = ['id', 'nome', 'email', 
              'data_nascimento', 'endereco', 'telefone', 
              'formacao_academica', 'experiencia_profissional',
              'certificacoes', 'data_criacao']