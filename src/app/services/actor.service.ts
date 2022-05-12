import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Actor } from '../classes/actor';
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
    ) { }
    getElements() {
      return this.firestore.collection('actores').ref;
    }
    async getActorPhoto(id: string) {
      return this.fireStorage.storage.ref(`actores/${id}.jpg`).getDownloadURL();
    }

    deleteElement(actor: Actor) {
      this.firestore
        .collection('actores')
        .doc(JSON.parse(JSON.stringify(actor)))
        .update({ isActive: false });
    }
  
    createElement(actor: Actor, photo: any) {
      if (photo) {
        const file = photo;
        const randomId = Math.random().toString(36).substring(2);
        actor.foto = randomId;
        const fileRef = this.fireStorage.storage.ref(`actores/${randomId}.jpg`);
        fileRef.put(file);
      } else {
        actor.foto = 'placeholder';
      }
      actor.isActive = true;
      this.firestore.collection('actores').add(JSON.parse(JSON.stringify(actor)));
    }
  
    modifyElement(actor :Actor) {
  
  
      this.firestore.collection('actores').doc(actor.id).update({
        nombre: actor.nombre,
        apellido: actor.apellido,
        Sexo: actor.sexo,
        fechaDeNacimiento: actor.fechaDeNacimiento,
        nacionalidad: actor.nacionalidad,
        foto: 'placeholder'
      });
    }
}
