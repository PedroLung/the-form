import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FuncionarioData } from '../_models/funcionarioData';
import {FormsModule, NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  data: FuncionarioData  = {
    nome: '',
    email: '',
    data_nascimento: new Date(),
    genero: '',
    endereco: '',
    telefone: '',
    formacao_academica: '',
    experiencia_profissional: '',
    certificacoes: '',
  }

  http = inject(HttpClient);

  constructor(private router: Router) { }
//pegar url da api, enviar os dados para a api, redirecionar o user
  cadastrarFuncionario(form: NgForm) {
    //alert('Funcionario cadastrado com sucesso!');

    this.http.post('http://localhost:8000/funcionarios/', this.data).subscribe(
      (response) => {
        console.log(response);
        form.reset();
        this.router.navigate(['cadastrado']);
      },
      (error) => {
        console.error(error);
      }
    );

  }


}
