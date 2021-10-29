import { Component } from '@angular/core';
import {UserService} from '../app/services/user.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'mkst';
public identity: any;
  constructor(
    private _userservice: UserService
   
  
  ){}

  ngOnInit(){
//this.identity = this._userservice.getIdentity();

  }
    
}
