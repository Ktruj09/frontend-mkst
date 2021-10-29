import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  title = 'MKST';
  subtitle = 'Iniciar Sesión';
  public status: string;
  public token;
  public identity;

  public user: User;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    //le pasamos todo vacío para rellenar desde el formulario
    this.user = new User('', '', '', '', '', '', '');
    this.status = 'string';
    this.identity = this.user;
    this.token = 'string';
  }

  ngOnInit() {}
  onSubmit() {
    //logueamos al usuario y conseguir sus datos
    this._userService.signup(this.user, null).subscribe(
      (response) => {
        this.identity = response.user;
        console.log(this.identity)
        if (!this.identity || !this.identity._id) {
          this.status = 'error';
        } else {
          this.status = 'success';

          //persistir datos del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity))
          //conseguir el token
          this.gettoken();
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (!errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  } //end método onSubmit()

  //método token
  gettoken(){
    this._userService.signup(this.user, 'true').subscribe(
      (response) => {
        this.token = response.token;

        //borar para que no muestre el token
        console.log(this.token);


        if (this.token.length <=0 ) {
          this.status = 'error';
        } else {
          this.status = 'success';

          //persistir datos del usuario
localStorage.setItem('token', JSON.stringify(this.token));
          //conseguir los contadores o estadisticas del usuario
        }
      },
      (error) => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (!errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }
}
