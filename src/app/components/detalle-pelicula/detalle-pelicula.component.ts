import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { async } from '@firebase/util';
import { Pelicula } from 'src/app/classes/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit, OnChanges {
  @Input() pelicula:Pelicula = new Pelicula();
  img:string = '';
  constructor(private peliculaService:PeliculasService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.pelicula);
    this.peliculaService.getMoviePhoto(this.pelicula.fotoDePelicula).then(response => {
      this.img = response;
    });
  }

}
