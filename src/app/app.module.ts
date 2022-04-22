import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import {ContadorComponent} from './contador/contador/contador.component';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

/*Tarea 
Crear un módulo llamado ContadorModule
declaraciones y exportaciones
*/

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { IndiceMasaCorporalComponent } from './indice-masa-corporal/indice-masa-corporal.component';


@NgModule({
  declarations: [
    AppComponent,
    IndiceMasaCorporalComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //importar aquí
    ContadorModule,
    DbzModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
