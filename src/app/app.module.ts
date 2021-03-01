import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { JugadorComponent } from "./jugador/jugador.component";
import { EquiposComponent } from "./equipos/equipos.component";
import { EquipoComponent } from "./equipo/equipo.component";
import { EquipoService } from "./equipo.service";
import { VictoriasComponent } from './victorias/victorias.component';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    JugadorComponent,
    EquiposComponent,
    EquipoComponent,
    VictoriasComponent,
    GraficoComponent
  ],
  bootstrap: [AppComponent],
  providers: [EquipoService, {provide:
    APP_BASE_HREF, useValue: '/equipos'}]
})
export class AppModule {}
