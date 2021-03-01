import { Component, OnInit } from "@angular/core";
import { EquipoService } from "../equipo.service";
import { Jugador } from "../models/Jugador";
import { Equipo } from "../models/Equipo";

import * as Highcharts from "highcharts";

@Component({
  selector: "app-victorias",
  templateUrl: "./victorias.component.html",
  styleUrls: ["./victorias.component.css"]
})
export class VictoriasComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  equipos: Array<Equipo> = [];

  chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "white",
      borderRadius: 80,
      spacing: [20, 20, 20, 20]
    },
    title: {
      text: "Trayectoria de los equipos"
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      title: {
        text: "Porcentajes (%)"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }
    },
    series: [
      {
        type: "column",
        name: "Victorias",
        data: []
      },
      {
        type: "bar",
        name: "derrotas",
        data: []
      }
    ],
    noData: {
      style: {
        allowOverlap: true,
        fontWeight: "bold",
        fontSize: "15px",
        color: "#303030"
      }
    }
  };

  constructor(private equipoService: EquipoService) {}

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquiposApi().subscribe(
      result => {
        const misDatos: Array<Equipo> = [];
        let api = null;
        api = result;
        for (let n of api) {
          let e = new Equipo(
            n.idEquipo,
            n.nombre,
            n.partidosJugados,
            n.victorias,
            n.derrotas,
            n.jugadores
          );
          misDatos.push(e);
        }
        const dataSeries = misDatos.map((x: Equipo) => x.getvicPorc());
        const dataSeries1 = misDatos.map((x: Equipo) => x.getderrPorc());
        const dataCategorias = misDatos.map((x: Equipo) => x.nombre);
        this.chartOptions.series[0]["data"] = dataSeries;
        this.chartOptions.series[1]["data"] = dataSeries1;
        this.chartOptions.xAxis["categories"] = dataCategorias;
        Highcharts.chart("victorias", this.chartOptions);
      },
      error => console.log(error)
    );
  }
}
