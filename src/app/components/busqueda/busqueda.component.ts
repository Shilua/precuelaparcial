import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculas:Array<Pelicula> = [
  ];

  pelicula:Pelicula = new Pelicula();

  constructor(private peliculaService:PeliculasService) {
    this.getPeliculas();
   }
  
  peliculaSeleccionada(pelicula:Pelicula){
    this.pelicula = pelicula;
  }

  getPeliculas(){
    this.peliculaService.getElements().where('isActive','==',true).get().then(
      snapshot=> {
        snapshot.docs.map((element:any) =>{
          let pelicula:Pelicula = new Pelicula();
          console.log(element.data())
          let data = element.data();
          pelicula.id = element.id;
          pelicula.nombre = data.nombre;
          pelicula.cantidadDePublico = data.cantidadDePublico;
          pelicula.fotoDePelicula = data.fotoDePelicula;
          pelicula.fechaDeEstreno = data.fechaDeEstreno;
          pelicula.isActive = data.isActive;
          pelicula.reparto = data.reparto;
          pelicula.tipo = data.tipo;

          this.peliculas.push(pelicula);
        })
      }
    )
  }

  ngOnInit(): void {
  }

}
