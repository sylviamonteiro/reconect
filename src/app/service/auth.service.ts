import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userLogin: UserLoginDTO): Observable<UserLoginDTO>{
    return this.http.post<UserLoginDTO>('https://reconect.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: UsuarioModel):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://reconect.herokuapp.com/usuarios/cadastrar', usuario)
  }

}