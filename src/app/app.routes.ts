import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { AppComponent } from './app.component';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { BannerPrincipalComponent } from './bannerprincipal/bannerprincipal.component';
import { InfoComponent } from './Informacoes_pessoais/info.component';
import { CategoriasComponent } from './categorias/categorias.component';


const APP_ROUTES: Routes =[
    {path:'', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path:'cadastro', component: CadastroComponent},
    { path:'encontre', component: BannerPrincipalComponent},
    { path:'teste', component: InfoComponent},
    {path: 'categorias', component: CategoriasComponent}

];

export const routing: ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);