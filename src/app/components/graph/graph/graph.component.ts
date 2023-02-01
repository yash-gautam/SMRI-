import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Band Score',
            data: [1,2,4,2,5,3],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1.5,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            color: '#36A2EB',
            anchor: 'end',
            align: 'left'
          }
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },

      },
    });
  }
}
