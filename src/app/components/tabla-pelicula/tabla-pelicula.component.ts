import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() listadoPelicula:Array<Pelicula> = [];
  @Output() peliculaSeleccionada : EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  constructor() {
    
   }

   mostrarDetalles(pelicula:Pelicula){
     this.peliculaSeleccionada.emit(pelicula);
   }
  ngOnInit(): void {
  }

}
