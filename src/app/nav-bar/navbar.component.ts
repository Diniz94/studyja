import { Component } from '@angular/core';

@Component({
    selector:'navbar',
    templateUrl:'navbar.component.html',
    styleUrls:['navbar.component.scss']
})

export class NavBarComponent{
    constructor(){

    }
    ngOnInit(){

    }
    menuResponsive(){
        let sidenav = document.querySelector('.sidenav');
        sidenav.classList.add('activeMenu');
        sidenav.classList.remove('hiddenMenu');
    }
}
