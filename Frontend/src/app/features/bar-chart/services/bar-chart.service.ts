import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnChartData } from '../models/column-chart-data-element.model';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor(private httpClient: HttpClient) { }

  getChartData(): Observable<ColumnChartData> {
    return this.httpClient.get<ColumnChartData>(`${environment.apiUrl}/column-chart-data`);
  }
}
