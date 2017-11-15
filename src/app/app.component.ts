import { Component } from '@angular/core';
//Inyectar
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//Import providers
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _cs:ChatService ) { }
}
