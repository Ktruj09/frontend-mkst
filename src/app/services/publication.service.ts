import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroupedObservable, Observable } from 'rxjs';
import { GlobalPost } from './global';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = GlobalPost.URL;
   }

   //método subir archivo.
   addPublication(token: any, publication: any): Observable<any>{
let params =JSON.stringify(publication);
let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Authorization', token)

return this._http.post(this.url+'publication', params, {headers: headers})
   }

//metodo obtener 
getPublications(token: any, page=1): Observable<any>{
 let headers =new HttpHeaders().set('Content-Type', 'application/json');

 return this._http.get(this+this.url+'getPublications/'+page, {headers: headers})
}

//borrar publicación
deletePublication(token: any, id: any): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Authorization', token)

   return this._http.delete(this.url+'deletePublication'+id, {headers: headers})

}
}
