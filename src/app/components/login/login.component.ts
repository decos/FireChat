import { Component} from '@angular/core';
//Import Service (Provider)
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor( public _cs:ChatService ) { }

  ingresar( proveedor:string ){
    console.log(proveedor);

    this._cs.login(proveedor);

  }

}
