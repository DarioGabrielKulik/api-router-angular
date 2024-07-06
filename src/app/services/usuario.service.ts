import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = 'https://gorest.co.in/public/v2/users';
  url2:string = 'https://gorest.co.in/public/v2/users/';
  token: string = '3da7c24fe8a6a560a7dac34abdfe5eab3aa156adf47b0645eedbec6572e079a3';

  constructor(private http:HttpClient) {
   }

   getUsuario():Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
   }

   getUsuarioId(id:number):Observable<any>{
    return this.http.get<any>(this.url2 + id + '?access-token=' + this.token);
   }
}
