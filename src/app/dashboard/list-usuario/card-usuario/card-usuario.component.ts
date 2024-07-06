import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrl: './card-usuario.component.css'
})
export class CardUsuarioComponent {
@Input() user: any;
id:number |undefined;
firstName:string = "";
email:string = "";

imgUrl='https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg';

constructor(){

}
ngOnInit(){
this.firstName = this.user.name;
this.email = this.user.email;
this.id = this.user.id;
}
}