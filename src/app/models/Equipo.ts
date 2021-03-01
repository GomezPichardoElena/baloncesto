import { Jugador } from "./Jugador";

export class Equipo {
  private _idEquipo: string;
  private _nombre: string;
  private _partidosJugados: number;
  private _victorias: number;
  private _derrotas: number;
  private _jugadores: Array<Jugador>;

  public constructor(
    idEquipo: string,
    nombre: string,
    partidosJugados: number,
    victorias: number,
    derrotas: number,
    jugadores: Array<Jugador>
  ) {
    (this._idEquipo = idEquipo),
      (this._nombre = nombre),
      (this._partidosJugados = partidosJugados),
      (this._victorias = victorias),
      (this._derrotas = derrotas),
      (this._jugadores = jugadores);
  }

  get idEquipo() {
    return this._idEquipo;
  }

  get nombre() {
    return this._nombre;
  }

  get partidosJugados() {
    return this._partidosJugados;
  }

  get victorias() {
    return this._victorias;
  }

  get derrotas() {
    return this._derrotas;
  }

  get jugadores() {
    return this._jugadores;
  }

  /*gettriples() {
    let t = 0;
    for (let a of this.jugadores) {
      t = t + a.triples;
    }
    return t;
  }

  getAsistencias() {
    let asis = 0;
    for (let a of this.jugadores) {
      asis = asis + a.asistencias;
    }
    return asis;
  }

  getRebotes() {
    let r = 0;
    for (let a of this.jugadores) {
      r = r + a.rebotes;
    }
    return r;
  }

  getPuntos() {
    let p = 0;
    for (let a of this.jugadores) {
      p = p + a.puntos;
    }
    return p;
  }

  getPases() {
    let pas = 0;
    for (let a of this.jugadores) {
      pas = pas + a.pases;
    }
    return pas;
  }*/

  getvicPorc() {
    let n1: number = this.victorias * 100;
    let n2: number = n1 / this.partidosJugados;
    return n2;
  }
  getderrPorc() {
    let n1: number = this.derrotas * 100;
    let n2: number = n1 / this.partidosJugados;
    return n2;
  }
}
