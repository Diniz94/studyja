import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './Login/login.module';
import { LoginComponent } from './Login/login.component';
import { CadastroModule} from './Cadastro/cadastro.module';
import { routing } from './app.routes';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { BannerPrincipalComponent } from './bannerprincipal/bannerprincipal.component';
import { NavBarModule} from './nav-bar/navbar.module'
import { NavBarComponent } from './nav-bar/navbar.component';
import { InfoComponent } from './Informacoes_pessoais/info.component';
import { FooterComponent } from './footer/footer.component';
import { NavDeslogadoComponent } from './navDeslogado/nav-deslogado.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    BannerPrincipalComponent,
    NavBarComponent,
    InfoComponent,
    FooterComponent,
    NavDeslogadoComponent,
    CategoriasComponent,
   ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
