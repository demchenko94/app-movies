import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  chart: object;
  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#3cb371',
              '#0000FF',
              '#9966FF',
              '#4C4CFF',
              '#00FFFF',
              '#f990a7',
              '#aad2ed',
              '#FF00FF',
              'Blue',
              'Red',
              'Blue'
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        }
      }
    });
  }
}
