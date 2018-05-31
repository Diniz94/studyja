import { Component, OnInit } from '@angular/core';
import { CKEDITOR_VALUE_ACCESSOR } from 'ngx-ckeditor/lib/src/ck-editor.component';

@Component({
  selector: 'app-escrever-resumo',
  templateUrl: './escrever-resumo.component.html',
  styleUrls: ['./escrever-resumo.component.scss']
})
export class EscreverResumoComponent implements OnInit {

  public editorValue: string = '';
  public elemento: Element= document.getElementById('texto');

  constructor() { 
  }

  ngOnInit() {
  }
}
