import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquiposComponent } from "./equipos/equipos.component";
import { EquipoComponent } from "./equipo/equipo.component";
import { JugadorComponent } from "./jugador/jugador.component";
import { CommonModule } from "@angular/common";
import { VictoriasComponent } from "./victorias/victorias.component";
import { GraficoComponent } from "./grafico/grafico.component";

const routes: Routes = [
  { path: "equipos", component: EquiposComponent },
  { path: "jugador/:idJugador", component: JugadorComponent },
  { path: "equipo/:idEquipo", component: EquipoComponent },
  { path: "victorias", component: VictoriasComponent },
  { path: "grafica", component: GraficoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
