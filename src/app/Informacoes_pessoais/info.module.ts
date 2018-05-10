import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { NavBarComponent } from '../nav-bar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    InfoComponent,
    NavBarComponent
  ],
  declarations: [InfoComponent]
})
export class InfoModule { }
