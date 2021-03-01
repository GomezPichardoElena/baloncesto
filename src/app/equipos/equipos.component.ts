import { Component, OnInit } from "@angular/core";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Equipo } from "../models/Equipo";

@Component({
  selector: "app-equipos",
  templateUrl: "./equipos.component.html",
  styleUrls: ["./equipos.component.css"]
})
export class EquiposComponent implements OnInit {
  equipos: Array<Equipo> = [];
  equiposApi = null;
  equipoTmp: any;
  constructor(private equipoService: EquipoService) {}
  getEquiposApi() {
    this.equipoService.getEquiposApi().subscribe(equipos => {
      this.equiposApi = equipos;
      for (let equipo of this.equiposApi) {
        let jugadores: Array<Jugador> = new Array();
        for (let jugador of equipo.jugadores) {
          let a = new Jugador(
            jugador.idJugador,
            jugador.nombre,
            jugador.nEquipo,
            jugador.fNacimiento,
            jugador.nPartidos,
            jugador.triples,
            jugador.asistencias,
            jugador.rebotes,
            jugador.puntos,
            jugador.pases,
            jugador.expulsiones
          );
          jugadores.push(a);
        }
        let e = new Equipo(
          equipo.idEquipo,
          equipo.nombre,
          equipo.partidosJugados,
          equipo.victorias,
          equipo.derrotas,
          jugadores
        );
        this.equipos.push(e);
      }
    });
  }

  add(
    idEquipo: string,
    nombre: string,
    partidosJugados: string,
    victorias: string,
    derrotas: string
  ) {
    const idEquipo1 = idEquipo.trim();
    const nombre1 = nombre.trim();
    const partidosJugados1 = parseInt(partidosJugados);
    const victorias1 = parseInt(victorias);
    const derrotas1 = parseInt(derrotas);

    const newDoc: any = {
      idEquipo: idEquipo1,
      nombre: nombre1,
      partidosJugados: partidosJugados1,
      victorias: victorias1,
      derrotas: derrotas1
    };
    this.equipoService.addEquipo(newDoc).subscribe(e => {
      this.equipoTmp = newDoc;
      this.equipos.push(this.equipoTmp);
    });
  }
  ngOnInit() {
    this.getEquiposApi();
  }
}
