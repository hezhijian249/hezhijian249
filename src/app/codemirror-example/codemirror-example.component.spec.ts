import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemirrorExampleComponent } from './codemirror-example.component';

describe('CodemirrorExampleComponent', () => {
  let component: CodemirrorExampleComponent;
  let fixture: ComponentFixture<CodemirrorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodemirrorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemirrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
