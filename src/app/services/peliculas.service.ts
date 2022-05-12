import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Pelicula } from '../classes/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) {}

  getElements() {
    return this.firestore.collection('peliculas').ref;
  }

  deleteElement(movie: Pelicula) {
    this.firestore
      .collection('peliculas')
      .doc(JSON.parse(JSON.stringify(movie)))
      .update({ isActive: false });
  }

  modifyElement(movie :Pelicula, imageToUpload: any) {
    if (imageToUpload) {
      const file = imageToUpload;
      const randomId = Math.random().toString(36).substring(2);
      movie.fotoDePelicula = randomId;
      const fileRef = this.fireStorage.storage.ref(`peliculas/${randomId}.jpg`);
      fileRef.put(file);
    }

    this.firestore.collection('peliculas').doc(movie.id).update({
      nombre: movie.nombre,
      tipo: movie.tipo,
      cantidadDePublico: movie.cantidadDePublico,
      fotoDeLaPelicula: movie.fotoDePelicula,
      fechaDeEstreno: movie.fechaDeEstreno,
    });
  }

  createElement(movie: Pelicula, photo: any) {
    if (photo) {
      const file = photo;
      const randomId = Math.random().toString(36).substring(2);
      movie.fotoDePelicula = randomId;
      const fileRef = this.fireStorage.storage.ref(`peliculas/${randomId}.jpg`);
      fileRef.put(file);
    } else {
      movie.fotoDePelicula = 'placeholdermovie';
    }
    movie.isActive = true;
    this.firestore.collection('peliculas').add(JSON.parse(JSON.stringify(movie)));
  }

  async getMoviePhoto(id: string) {
    return this.fireStorage.storage.ref(`peliculas/${id}.jpg`).getDownloadURL();
  }
}
