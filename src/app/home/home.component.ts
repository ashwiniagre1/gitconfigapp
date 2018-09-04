import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Login","routerLink":"uitest/core/login","selected":false},{"text":"Tempcheck","routerLink":"uitest/core/tempcheck","selected":false},{"text":"Ver","routerLink":"uitest/core/ver","selected":false},{"text":"Blankui","routerLink":"uitest/core/blankui","selected":false},{"text":"TEST","routerLink":"uitest/core/test","selected":false},{"text":"TestModel","routerLink":"uitest/core/testmodel","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
