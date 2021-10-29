//permite poder definir los servicios y luego poder importarlos en cualquier otra clase
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
//recogemos las respuestas
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public url: string;
  public identity;
  public token;
  constructor(public _http: HttpClient) {
    this.url = Global.URL;
    this.identity = 'string';
    this.token = 'string';
  } //end constructor

  register(user: User): Observable<any> {
    let params = JSON.stringify(user);

    //configuramos cabezeras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    //hacemos petición a la api
    return this._http.post(this.url + 'register', params, { headers: headers });
  } //end  register

  //método inicio de sesión
  signup(user: any, gettoken: string | null | undefined): Observable<any> {
    if (gettoken != null) {
      user.gettoken = gettoken;
    }
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', params, { headers: headers });
  } //end signup

  //método identity
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity')!);

    if (identity != undefined) {
      this.identity = identity;
    } else {
      identity = null;
    }

    return this.identity;
  } //getIdentity

  getToken() {
    let token = localStorage.getItem('token');

    if (token != undefined) {
      this.token = token;
    } else {
      token = null;
    }
    return this.token;
  }

  //update user
  updateUser(user: User): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

      return this._http.put(this.url+'updateUser/'+user._id, params, {headers: headers})
  }
}
