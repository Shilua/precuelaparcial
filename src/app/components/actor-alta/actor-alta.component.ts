import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { ActorService } from 'src/app/services/actor.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit, OnDestroy {
  public actor:Actor = new Actor();
  private fileToUpload:any;
  public photoUrl: string = '';
  
  constructor(private actorService:ActorService, private toastService:ToastService) { 
  }

  handleImagen(files: any) {
    
    this.fileToUpload = files.target.files[0];
  }

  handleSelectNationality(nationality: string){
    this.actor.nacionalidad = nationality;
  }

  cargarActor(){
    this.actorService.createElement(this.actor, this.fileToUpload);
    this.toastService.show(
      'Se ha creado un nuevo actor', 
      { classname: 'bg-success text-light', delay: 5000 }
    );
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }

}
