import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDemo1Component } from './chart-demo1/chart-demo1.component';
import { ChartDemo2Component } from './chart-demo2/chart-demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDemo1Component,
    ChartDemo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartjsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
