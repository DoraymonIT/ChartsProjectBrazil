import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-demo2',
  templateUrl: './chart-demo2.component.html',
  styleUrls: ['./chart-demo2.component.css']
})
export class ChartDemo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public chartType: string = 'bar';
  public chartDatasets: Array<any> = [
        // Here , you can put the data of the team A
    { data: [5, 3, 3, 6, 8, 10, 6], label: 'Chelsea',backgroundColor:'red'},
  ];
  public chartLabels: Array<any> = ['2010', '2011', '2012', '2013', '2014', '2015'];
  public chartOptions: any = {
    responsive: true,
  };
  public chartColors: Array<any> = [
    {


      borderWidth: 2,
    }
  ];
      // Here , you can put the type of the charts
  public chartType1: string = 'bar';
  public chartDatasets1: Array<any> = [
    // Here , you can put the data of the team B
    { data: [15, 3, 31, 0, 8, 1, 6], label: 'Real Madrid', backgroundColor:'black'},
  ];
      // Here , you can put whatever you want
  public chartLabels1: Array<any> = ['2010', '2011', '2012', '2013', '2014', '2015'];
  public chartOptions1: any = {
    responsive: true,
  };
  public chartColors1: Array<any> = [
    {


      borderWidth: 2,
    }
  ];
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
