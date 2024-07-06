import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
id:number;
firstName: string = '';
email:string = '';
imgUrl='https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg';

constructor(private arouter:ActivatedRoute, private servicioUsuario:UsuarioService){
  const idParam = this.arouter.snapshot.paramMap.get('id');
  this.id = idParam ? + idParam : 0; 
}

ngOnInit(){
  this.usuarioId();
}

usuarioId(){
this.servicioUsuario.getUsuarioId(this.id).subscribe( data => {
console.log(data);
  this.firstName = data.name;
  this.email = data.email;
} )
}

}
