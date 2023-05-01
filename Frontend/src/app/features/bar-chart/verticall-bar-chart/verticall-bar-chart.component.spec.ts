import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticallBarChartComponent } from './verticall-bar-chart.component';

describe('VerticallBarChartComponent', () => {
  let component: VerticallBarChartComponent;
  let fixture: ComponentFixture<VerticallBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticallBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticallBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
