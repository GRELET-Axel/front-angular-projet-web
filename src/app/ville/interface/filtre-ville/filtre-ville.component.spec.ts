import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreVilleComponent } from './filtre-ville.component';

describe('FiltreVilleComponent', () => {
  let component: FiltreVilleComponent;
  let fixture: ComponentFixture<FiltreVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltreVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
