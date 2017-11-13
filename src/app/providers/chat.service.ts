import { Injectable } from '@angular/core';
//Import Collection
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  public chats: any[] = [];

  constructor(private afs: AngularFirestore) { }

  //Deberia regresar una promesa o un observable
  cargarMensajes(){
    this.itemsCollection = this.afs.collection<any>('chats');
    //Pendiente de todos los cambios
    return this.itemsCollection.valueChanges();
  }

}
