import { Injectable } from '@angular/core';
//Import Collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
//Import interface
import { Mensaje } from '../interface/mensaje.interface';
//Firebase Authentication
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];
  public usuario:any = {};

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {

      this.afAuth.authState.subscribe(
        user => {
          console.log("Estado del Usuario: ", user);

          if(!user){
            return;
          }

          this.usuario.nombre = user.displayName;
          this.usuario.uid = user.uid;
        }
      )
  }

  //Firebase Authentication function
  login( proveedor:string ) {
    if( proveedor === 'google' ){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }

  }

  //Firebase Authentication function
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  //Deberia regresar una promesa o un observable
  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
          ref => ref.orderBy('fecha', 'desc').limit(5)
    );
    //Pendiente de todos los cambios
    return this.itemsCollection.valueChanges().map(
        (mensajes:Mensaje[]) => {
          console.log("Mensajes - Provider" , mensajes);

          this.chats = [];

          for( let mensaje of mensajes){
            this.chats.unshift( mensaje );
          }

          return this.chats;
          //this.chats = mensajes;
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
