from django.db import models

# Create your models here.
class Funcionario(models.Model):
  nome = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  data_nascimento = models.DateField()
  endereco = models.CharField(max_length=200)
  telefone = models.CharField(max_length=12)
  formacao_academica = models.CharField(max_length=100)
  experiencia_profissional = models.CharField(max_length=500)
  certificacoes = models.CharField(max_length=200)
  data_criacao = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    #return f"{self.nome} {self.email} 
    #{self.data_criacao} {self.data_nascimento} 
    #{self.endereco} {self.telefone} 
    #{self.formacao_academica} {self.experiencia_profissional} 
    #{self.certificacoes}"

    return 'Ola :)'