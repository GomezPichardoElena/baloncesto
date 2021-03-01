export class Jugador {
  private _idJugador: string;
  private _nombre: string;
  private _fNacimiento: Date;
  private _nEquipo: string;
  private _nPartidos: number;
  private _triples: number;
  private _asistencias: number;
  private _rebotes: number;
  private _puntos: number;
  private _pases: number;
  private _expulsiones: number;

  public constructor(
    idJugador: string,
    nombre: string,
    fNacimiento: Date,
    nEquipo: string,
    nPartidos: number,
    triples: number,
    asistencias: number,
    rebotes: number,
    puntos: number,
    pases: number,
    expulsiones: number
  ) {
    (this._idJugador = idJugador),
      (this._nombre = nombre),
      (this._fNacimiento = fNacimiento),
      (this._nEquipo = nEquipo),
      (this._nPartidos = nPartidos),
      (this._triples = triples),
      (this._asistencias = asistencias),
      (this._rebotes = rebotes),
      (this._puntos = puntos),
      (this._pases = pases),
      (this._expulsiones = expulsiones);
  }

  get idJugador() {
    return this._idJugador;
  }
  get nombre() {
    return this._nombre;
  }
  get fNacimiento() {
    return this._fNacimiento;
  }
  get nEquipo() {
    return this._nEquipo;
  }
  get nPartidos() {
    return this._nPartidos;
  }
  get triples() {
    return this._triples;
  }
  get asistencias() {
    return this._asistencias;
  }
  get rebotes() {
    return this._rebotes;
  }
  get puntos() {
    return this._puntos;
  }
  get pases() {
    return this._pases;
  }
  get expulsiones() {
    return this._expulsiones;
  }

  gettriples() {
    return this.triples;
  }

  getAsistencias() {
    return this.asistencias;
  }

  getRebotes() {
    return this.rebotes;
  }

  getPuntos() {
    return this.puntos;
  }

  getPases() {
    return this.pases;
  }
  getExp() {
    return this.expulsiones;
  }
}
