import { Routes } from '@angular/router';
import{CadastroComponent} from './cadastro/cadastro.component'
import {CadastradoComponent} from './cadastrado/cadastrado.component'



export const routes: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'cadastrado', component: CadastradoComponent }
];
