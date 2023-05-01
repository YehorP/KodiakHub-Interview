import { Component, OnInit } from '@angular/core';
import { BarChartService } from './features/bar-chart/services/bar-chart.service';
import { ColumnChartData } from './features/bar-chart/models/column-chart-data-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  chartData: ColumnChartData;

  constructor(private barChartServiec: BarChartService) {

  }

  ngOnInit(): void {
    this.barChartServiec.getChartData().subscribe(data => this.chartData = data);
  }
  
}
