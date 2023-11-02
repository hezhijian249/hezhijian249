import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeChartComponent } from './three-chart.component';

describe('ThreeChartComponent', () => {
  let component: ThreeChartComponent;
  let fixture: ComponentFixture<ThreeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
