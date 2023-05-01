import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticallBarChartComponent } from './verticall-bar-chart/verticall-bar-chart.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VerticallBarChartComponent
  ],
  imports: [
    SharedModule
  ], 
  exports: [VerticallBarChartComponent]
})
export class BarChartModule { }
