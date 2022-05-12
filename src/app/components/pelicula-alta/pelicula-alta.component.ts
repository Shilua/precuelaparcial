import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit, OnDestroy {

  constructor(private actorService:ActorService, private peliculaService:PeliculasService, private toastService:ToastService) { }
  public actors:Array<Actor> = [];
  public pelicula:Pelicula = new Pelicula();
  public photoUrl:any
  private fileToUpload:any;
  ngOnInit(): void {
    this.getActors();
  }

  getActors(){
    this.actorService.getElements().where('isActive', '==', true).get().then(
      snapshot => {
        snapshot.docs.map((element:any)=>{
          
          let actor:Actor = new Actor();
          let data = element.data();
          actor.id = element.id;
          actor.nombre = data.nombre;
          actor.apellido = data.apellido;
          actor.fechaDeNacimiento = data.fechaDeNacimiento;
          actor.isActive = data.isActive;
          actor.sexo = data.sexo;
          this.actors.push(actor);
        })
      }
    )
  }

  cargarPelicula(){
    this.peliculaService.createElement(this.pelicula,this.fileToUpload);
    this.toastService.show(
      'Se ha cereado una pelicula', 
      { classname: 'bg-success text-light', delay: 5000 }
    );
  }

  handleImagen(files: any) {
    
    this.fileToUpload = files.target.files[0];
  }


  handleActor(actor:Actor){
    this.pelicula.reparto.push(actor.nombre + ' ' + actor.apellido);
    console.log(this.pelicula.reparto);  
  }

  ngOnDestroy(): void {
    this.toastService.clear()
  }

}
