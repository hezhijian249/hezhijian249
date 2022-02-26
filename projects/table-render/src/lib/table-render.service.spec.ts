import { TestBed } from '@angular/core/testing';

import { TableRenderService } from './table-render.service';

describe('TableRenderService', () => {
  let service: TableRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
