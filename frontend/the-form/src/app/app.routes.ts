import { Routes } from '@angular/router';
import{CadastroComponent} from './cadastro/cadastro.component'
import {CadastradoComponent} from './cadastrado/cadastrado.component'
import { HomeComponent } from './home/home.component'
import { PainelComponent } from './painel/painel.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'cadastro', component: CadastroComponent},
    { path: 'cadastrado', component: CadastradoComponent },
    {path: 'gerente', component: PainelComponent}

];
