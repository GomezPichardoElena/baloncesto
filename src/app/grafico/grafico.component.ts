import { Component, OnInit } from "@angular/core";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Equipo } from "../models/Equipo";

import * as Highcharts from "highcharts";

@Component({
  selector: "app-grafico",
  templateUrl: "./grafico.component.html",
  styleUrls: ["./grafico.component.css"]
})
export class GraficoComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  equipos: Array<Equipo> = [];
  equiposApi = null;
  equipoTmp: any;
  jugadores: Array<Jugador> = [];

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "white",
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: "Estadísticas de los jugadores",
      style: {
        fontFamily: "Cambria",
        fontSize: "30px",
        color: "black"
      }
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: "cantidad"
      }
    },

    series: [
      {
        type: "column",
        name: "triples",
        data: [],
        color: "#38F902"
      },
      {
        type: "column",
        name: "asistencias",
        data: [],
        color: "#02F9E1"
      },
      {
        type: "column",
        name: "rebotes",
        data: [],
        color: "#002CF9"
      },
      {
        type: "column",
        name: "puntos",
        data: [],
        color: "#894ACC"
      },
      {
        type: "column",
        name: "pases",
        data: [],
        color: "#F900DE"
      },
      {
        type: "column",
        name: "expulsiones",
        data: [],
        color: "#F90202"
      }
    ],
    noData: {
      style: {
        fontWeight: "bold",
        fontSize: "20px",
        color: "white"
      }
    }
  };
  constructor(private equipoService: EquipoService) {}

  getEquipos() {
    this.equipoService.getEquiposApi().subscribe(equipos => {
      this.equiposApi = equipos;
      for (let equipo of this.equiposApi) {
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
          this.jugadores.push(a);
        }
      }
      let grafico = this.jugadores.slice(0, 30);
      this.chartOptions.xAxis["categories"] = grafico.map(
        (x: Jugador) => x.nombre
      );

      this.chartOptions.series[0]["data"] = grafico.map((x: Jugador) =>
        x.gettriples()
      );
      this.chartOptions.series[1]["data"] = grafico.map((x: Jugador) =>
        x.getAsistencias()
      );
      this.chartOptions.series[2]["data"] = grafico.map((x: Jugador) =>
        x.getRebotes()
      );
      this.chartOptions.series[3]["data"] = grafico.map((x: Jugador) =>
        x.getPuntos()
      );
      this.chartOptions.series[4]["data"] = grafico.map((x: Jugador) =>
        x.getPases()
      );
      this.chartOptions.series[5]["data"] = grafico.map((x: Jugador) =>
        x.getExp()
      );

      Highcharts.chart("grafico", this.chartOptions);
    });
  }

  ngOnInit() {
    this.getEquipos();
  }
}
