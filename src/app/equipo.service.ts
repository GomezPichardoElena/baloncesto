import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Jugador } from "./models/Jugador";

@Injectable({ providedIn: "root" })
export class EquipoService {
  private url = "https://proyectobaloncesto.herokuapp.com/";
  constructor(private http: HttpClient) {}
  getEquipo(idEquipo: string) {
    const urlget = `https://proyectobaloncesto.herokuapp.com/equipo/${idEquipo}`;
    return this.http.get(urlget);
  }

  addEquipo(doc: any) {
    const urlpost = `https://proyectobaloncesto.herokuapp.com/equipo`;
    return this.http.post(urlpost, doc);
  }

  getEquiposApi() {
    const urlget = `${this.url}equipos`;
    return this.http.get(urlget);
  }

  updateEquipo(doc: any) {
    const urlpost = `https://proyectobaloncesto.herokuapp.com/equipo/${
      doc.idEquipo
    }`;
    return this.http.post(urlpost, doc);
  }

  getJugador(idJugador: number, nEquipo: string) {
    const urlget = `https://proyectobaloncesto.herokuapp.com/jugador/${idJugador}&${nEquipo}`;
    return this.http.get(urlget);
  }

  addJugador(doc: any) {
    const urlpost = `https://proyectobaloncesto.herokuapp.com/jugador`;
    return this.http.post(urlpost, doc);
  }

  updateJugador(doc: any) {
    const urlpost = `https://proyectobaloncesto.herokuapp.com/jugador/${
      doc.idJugador
    }&${doc.nEquipo}`;
    return this.http.post(urlpost, doc);
  }

  deleteJugador(jugador: Jugador) {
    const urlget = `https://proyectobaloncesto.herokuapp.com/borrarJugador/${
      jugador.idJugador
    }&${jugador.nEquipo}`;
    return this.http.get(urlget);
  }s
}
