import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAjoutVilleComponent } from './dialog-ajout-ville.component';

describe('DialogAjoutVilleComponent', () => {
  let component: DialogAjoutVilleComponent;
  let fixture: ComponentFixture<DialogAjoutVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAjoutVilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAjoutVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
