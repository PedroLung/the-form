import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, Location } from '@angular/common';
import { ModalData } from '../_models/modalData';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent {
  constructor(private http: HttpClient, private location: Location) {}

  dados: any = [];

  modaData: ModalData = {
    id: 0,
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

  isModalVisible: boolean = false;

  getData() {
    this.http.get('http://localhost:8000/funcionarios/').subscribe((data) => {
      this.dados = data;
      console.log(this.dados);
    });
  }
  deleteItem (id:any){
    this.http.delete(`http://localhost:8000/funcionarios/${id}/`).subscribe((data) => {
      this.dados = data;
     window.location.reload();
    });
  }
  updateItem (id:any){
    this.http.put(`http://localhost:8000/funcionarios/${id}/`, this.modaData).subscribe((data) => {
      this.dados = data;
      this.isModalVisible = false;
      window.location.reload();
    });
  }

  openModal (item:any){
    this.modaData = item;
    this.isModalVisible = true;
  }

  closeModal (){
    this.isModalVisible = false;
  }


  ngOnInit() {
    this.getData();
  }

}
