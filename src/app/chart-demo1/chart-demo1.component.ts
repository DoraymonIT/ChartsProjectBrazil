import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-demo1',
  templateUrl: './chart-demo1.component.html',
  styleUrls: ['./chart-demo1.component.css']
})
export class ChartDemo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [5,3,3,6,8,10,6], label: 'Chelsea',backgroundColor:'red' },
    { data: [-2,-6,-10,-1,-7,-10], label: 'Real Madrid',backgroundColor:'black' }

  ];

  public chartLabels: Array<any> = ['2010', '2011','2012','2013','2014','2015'];
  public chartOptions: any = {
    responsive: true,


  };
  public chartColors: Array<any> = [
    {
      borderWidth: 2,
    }
  ];
  public chartClicked(e: any): void {  }
  public chartHovered(e: any): void { }
}


