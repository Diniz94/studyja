import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-deslogado',
  templateUrl: 'nav-deslogado.component.html',
  styleUrls: ['nav-deslogado.component.scss']
})
export class NavDeslogadoComponent implements OnInit {

  ngOnInit(){

  }
  menuResponsive(){
      let sidenav = document.querySelector('.sidenav');
      sidenav.classList.add('activeMenu');
      sidenav.classList.remove('hiddenMenu');
  }
  closeMenuResponsive(){
      let sidenav = document.querySelector('.sidenav');
      sidenav.classList.remove('activeMenu');
      sidenav.classList.add('hiddenMenu');
  }
  showCampoPesquisa(){
    let search = document.querySelector('.search');
    if(search.classList.contains("hiddenSearch")){
      search.classList.remove('hiddenSearch');
      return;
    }
    else{
      search.classList.add('hiddenSearch');
    }
      }
  }

