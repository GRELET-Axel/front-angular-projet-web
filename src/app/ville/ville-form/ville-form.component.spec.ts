import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleFormComponent } from './ville-form.component';

describe('VilleFormComponent', () => {
  let component: VilleFormComponent;
  let fixture: ComponentFixture<VilleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
