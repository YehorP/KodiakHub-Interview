import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ColumnChartData} from '../models/column-chart-data-element.model';

const colorsList = [
  '#ff7373',
  '#ffa500',
  '#20b2aa'
]

@Component({
  selector: 'app-verticall-bar-chart',
  templateUrl: './verticall-bar-chart.component.html',
  styleUrls: ['./verticall-bar-chart.component.scss']
})
export class VerticallBarChartComponent {

  @Input() defaultColor: string = '#0000ff' 
  @Input() colorList: string[] = colorsList;
  @Input() set chartData(data: ColumnChartData) {
    this.chartEntries = data;
    this.mapChartData(data);
  };

  chartEntries: ColumnChartData;
  entryColorMapping: Map<string, string>;
  xAxisMapping: Map<number, ColumnChartData>;
  xMappingKeys: number[];
  entryColorMappingKeys: string[];
  
  constructor(private cdr: ChangeDetectorRef) { }

  mapChartData(data: ColumnChartData) {
    this.entryColorMapping = new Map();
    this.xAxisMapping = new Map();
    this.xMappingKeys = [];
    this.entryColorMappingKeys = [];
    let colorsStartingIndex = 0;
    for(let element of data) {
      if(!this.entryColorMapping.has(element.label)) {
        const color = this.colorList.length > colorsStartingIndex ? this.colorList[colorsStartingIndex] : this.defaultColor;
        colorsStartingIndex++;
        this.entryColorMapping.set(element.label, color);
        this.entryColorMappingKeys.push(element.label);
      }
      if(!this.xAxisMapping.has(element.x)){
        this.xMappingKeys.push(element.x);
        this.xAxisMapping.set(element.x, [element]);
        continue;
      } 
      
      this.xAxisMapping.get(element.x)?.push(element);
    }
    this.cdr.detectChanges()
  } 

}
