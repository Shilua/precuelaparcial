import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { environment } from 'src/environments/environment';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ModificarActorComponent } from './components/modificar-actor/modificar-actor.component';
import { ModificarPeliculaComponent } from './components/modificar-pelicula/modificar-pelicula.component';
import { EliminarActorComponent } from './components/eliminar-actor/eliminar-actor.component';
import { EliminarPeliculaComponent } from './components/eliminar-pelicula/eliminar-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ToastContainerComponent,
    NavBarComponent,
    ModificarActorComponent,
    ModificarPeliculaComponent,
    EliminarActorComponent,
    EliminarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
