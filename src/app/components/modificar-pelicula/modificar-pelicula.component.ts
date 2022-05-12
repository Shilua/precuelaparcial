import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { Pelicula } from 'src/app/classes/pelicula';
import { ActorService } from 'src/app/services/actor.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ToastService } from 'src/app/services/toast.service'

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() pelicula:Pelicula = new Pelicula();
  public actors:Array<Actor> = [];
  public photoUrl:any
  private fileToUpload:any;
  constructor(private actorService:ActorService, private peliculaService:PeliculasService, private toastService:ToastService) {
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
    this.peliculaService.modifyElement(this.pelicula, this.fileToUpload)
    this.toastService.show(
      'Se ha actualizado una pelicula', 
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



  ngOnInit(): void {
  }

}
