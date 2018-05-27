import { Component } from '@angular/core';

@Component({
    selector:'navbar',
    templateUrl:'navbar.component.html',
    styleUrls:['navbar.component.scss']
})

export class NavBarComponent{
    constructor()
    {
     
    }
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
