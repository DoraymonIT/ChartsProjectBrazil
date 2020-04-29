import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartDemo1Component } from './chart-demo1/chart-demo1.component';
import { ChartDemo2Component } from './chart-demo2/chart-demo2.component';


const routes: Routes = [
  {
    path: 'demo1',
    component: ChartDemo1Component
  },
   {
    path: 'demo2',
    component: ChartDemo2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
