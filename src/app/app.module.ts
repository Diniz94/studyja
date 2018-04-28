import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './Login/login.module';
import { LoginComponent } from './Login/login.component';
import { CadastroModule} from './Cadastro/cadastro.module';
import { routing } from './app.routes';
import { CadastroComponent } from './Cadastro/cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
