import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

//importamos el modelo usuario
import { User } from '../../models/user';
//importamos servicios de user
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public user: User;
  public status: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title='MSKT ';
    this.subtitle='Registrate';
    this.status='string';
    

     //le pasamos todo vacío para rellenar desde el formulario 
     this.user = new User( "",
     "",
     "",
     "",
     "",
     "",
     ""
     );
  }

  ngOnInit() {
  }

  //método para recibir los datos. Form es para que nos ayude a resetar el formulario 
onSubmit(){

  //subscribe(), nos ayuda con el metodo observable
this._userService.register(this.user).subscribe(
  response =>{
if(response.user && response.user._id){
  //esto nos sirve para ver si ha guardado los datos al backend
//console.log(response.user);

this.status= 'success';


}else{
  this.status='error'
}
  }, error =>{
    console.log(error)
  }
);
}//end onsubmit
}
