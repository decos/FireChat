import { Injectable } from '@angular/core';
//Import Collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//Import interface
import { Mensaje } from '../interface/mensaje.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private afs: AngularFirestore) { }

  //Deberia regresar una promesa o un observable
  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    //Pendiente de todos los cambios
    return this.itemsCollection.valueChanges().map(
      (mensajes:Mensaje[]) => {
        console.log("Mensajes - Provider" , mensajes);
        this.chats = mensajes;
      }
    )
  }

  agregarMensaje( texto:string ){
    //TODO Falta el UID del usuario
    let mensaje:Mensaje = {
      nombre: "Demo",
      mensaje: texto,
      fecha: new Date().getTime()
    }

    // Esto regresa una promesa
    return this.itemsCollection.add(mensaje);
  }

}
