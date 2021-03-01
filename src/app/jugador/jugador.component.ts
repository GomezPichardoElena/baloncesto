import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Location } from "@angular/common";

@Component({
  selector: "app-jugador",
  templateUrl: "./jugador.component.html",
  styleUrls: ["./jugador.component.css"]
})
export class JugadorComponent implements OnInit {
  jugador: Jugador;
  jugadorApi = null;

  constructor(
    private route: ActivatedRoute,
    private equipoService: EquipoService,
    private location: Location
  ) {}
  getJugador() {
    let idJugador: any = this.route.snapshot.paramMap.get("idJugador");
    let e = idJugador.split("&");

    idJugador = e[0];
    let equipo = e[1];

    this.equipoService.getJugador(idJugador, equipo).subscribe(n => {
      this.jugadorApi = n;
      this.jugador = new Jugador(
        this.jugadorApi.idJugador,
        this.jugadorApi.nombre,
        this.jugadorApi.fNacimiento,
        this.jugadorApi.nEquipo,
        this.jugadorApi.nPartidos,
        this.jugadorApi.triples,
        this.jugadorApi.asistencias,
        this.jugadorApi.rebotes,
        this.jugadorApi.puntos,
        this.jugadorApi.pases,
        this.jugadorApi.expulsiones
      );
    });
  }

  save(
    nPartidos: string,
    triples: string,
    asistencias: string,
    rebotes: string,
    puntos: string,
    pases: string,
    expulsiones: string
  ): void {
    const nPartidos1 = parseInt(nPartidos);
    const triples1 = parseInt(triples);
    const asistencias1 = parseInt(asistencias);
    const rebotes1 = parseInt(rebotes);
    const puntos1 = parseInt(puntos);
    const pases1 = parseInt(pases);
    const expulsiones1 = parseInt(expulsiones);

    const doc = {
      idJugador: this.jugador.idJugador,
      fNacimiento: this.jugador.fNacimiento,
      nombre: this.jugador.nombre,
      nEquipo: this.jugador.nEquipo,
      nPartidos: nPartidos1,
      triples: triples1,
      asistencias: asistencias1,
      rebotes: rebotes1,
      puntos: puntos1,
      pases: pases1,
      expulsiones: expulsiones1
    };
    this.equipoService.updateJugador(doc).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getJugador();
  }
}
