import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Equipo } from "../models/Equipo";
import { Location } from "@angular/common";

@Component({
  selector: "app-equipo",
  templateUrl: "./equipo.component.html",
  styleUrls: ["./equipo.component.css"]
})
export class EquipoComponent implements OnInit {
  equipo: Equipo;
  equipoApi = null;

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private location: Location
  ) {}
  getEquipo(): void {
    const idEquipo = this.route.snapshot.paramMap.get("idEquipo");
    this.equipoService.getEquipo(idEquipo).subscribe(e => {
      this.equipoApi = e;
      let jugadores: Array<Jugador> = new Array();
      for (let jugador of this.equipoApi[0].jugadores) {
        let j = new Jugador(
          jugador.idJugador,
          jugador.nombre,
          jugador.fNacimiento,
          jugador.nEquipo,
          jugador.nPartidos,
          jugador.triples,
          jugador.asistencias,
          jugador.rebotes,
          jugador.puntos,
          jugador.pases,
          jugador.expulsiones
        );
        jugadores.push(j);
      }
      this.equipo = new Equipo(
        this.equipoApi[0].idEquipo,
        this.equipoApi[0].nombre,
        this.equipoApi[0].partidosJugados,
        this.equipoApi[0].victorias,
        this.equipoApi[0].derrotas,
        jugadores
      );
    });
  }
  add(
    idJugador: string,
    nombre: string,
    fNacimiento: string,
    nEquipo: string,
    nPartidos: string,
    triples: string,
    asistencias: string,
    rebotes: string,
    puntos: string,
    pases: string,
    expulsiones: string
  ) {
    const idJugador1 = parseInt(idJugador);
    const nombreN = nombre.trim();
    const fNacimientoN = new Date(fNacimiento);
    const nEquiposN = nEquipo.trim();
    const nPartidos1 = parseInt(nPartidos);
    const triples1 = parseInt(triples);
    const asistencias1 = parseInt(asistencias);
    const rebotes1 = parseInt(rebotes);
    const puntos1 = parseInt(puntos);
    const pases1 = parseInt(pases);
    const expulsiones1 = parseInt(expulsiones);

    const newDoc: any = {
      idJugador: idJugador1,
      nombre: nombreN,
      fNacimiento: fNacimientoN,
      nEquipo: nEquiposN,
      nPartidos: nPartidos1,
      triples: triples1,
      asistencias: asistencias1,
      rebotes: rebotes1,
      puntos: puntos1,
      pases: pases1,
      expulsiones: expulsiones1
    };
    this.equipoService.addJugador(newDoc).subscribe(j => {
      const jugadorTmp: any = newDoc;
      this.equipoApi.jugadores.push(jugadorTmp);
    });
  }
  save(partidosJugados: string, victorias: string, derrotas: string): void {
    const partidosJugados1 = parseInt(partidosJugados);
    const victorias1 = parseInt(victorias);
    const derrotas1 = parseInt(derrotas);

    const doc = {
      idEquipo: this.equipo.idEquipo,
      nombre: this.equipo.nombre,
      partidosJugados: partidosJugados1,
      victorias: victorias1,
      derrotas: derrotas1
    };
    this.equipoService.updateEquipo(doc).subscribe(() => this.goBack());
  }

  delete(jugador: Jugador): void {
    this.equipo.jugadores.forEach((j, index) => {
      if (j === jugador) this.equipo.jugadores.splice(index, 1);
    });
    this.equipoService.deleteJugador(jugador).subscribe();
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getEquipo();
  }
}
