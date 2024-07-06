import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrl: './list-usuario.component.css'
})
export class ListUsuarioComponent {

  listUsuario: any[] = [];

  constructor(private uService:UsuarioService){
  }

  ngOnInit(){
    this.getUsuario();
  }

  getUsuario(): void{
    this.uService.getUsuario().subscribe(data => {
      console.log(data)
      this.listUsuario = data;
    })
  }
}
