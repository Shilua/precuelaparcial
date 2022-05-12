import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Actor } from 'src/app/classes/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Input() actorsCollection: Array<Actor> = [];
  @Output() selectedActor: EventEmitter<Actor> = new EventEmitter<Actor>(); 
  constructor(private actorService:ActorService) { 
  }

  ngOnInit(): void {
    
  }

  lanzarActor(actor:Actor){
    this.selectedActor.emit(actor);
  }

}
