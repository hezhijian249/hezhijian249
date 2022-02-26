import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRenderComponent } from './table-render.component';

describe('TableRenderComponent', () => {
  let component: TableRenderComponent;
  let fixture: ComponentFixture<TableRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
