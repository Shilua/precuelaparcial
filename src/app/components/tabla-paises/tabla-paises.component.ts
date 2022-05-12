import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  misBanderas:any[]|undefined;
  misPaises:Observable<any>|undefined;
  @Output() selectedNationality: EventEmitter<any> = new EventEmitter<any>(); 
  constructor(private paises:PaisesService, private http :HttpClient) { }

  ngOnInit(): void {
    this.paises.todos().subscribe(
      banderas=>{
      this.misBanderas = banderas; 
    }  );
    
    this.misPaises = this.paises.todos();
  }

  buscarPais(pais:any){
    this.selectedNationality.emit(pais.name.common);
  }

}
