import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  idUsuario: number
  userId = environment.id

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token == ''){
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/login'])   
    }
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  findByIdUsuario(id: number){
    this.authService.getByIdUser(id).subscribe((resp: UsuarioModel)=>{
      this.usuario = resp
    })
  }

  verificaPerfilUsuario(){

    if(this.idUsuario == environment.id){
      return true
    }
    return false;
  }

}
