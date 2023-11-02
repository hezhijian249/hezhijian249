import { TestBed } from '@angular/core/testing';

import { ThreeChartService } from './three-chart.service';

describe('ThreeChartService', () => {
  let service: ThreeChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreeChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
