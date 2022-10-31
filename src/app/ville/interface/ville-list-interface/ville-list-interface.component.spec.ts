import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleListInterfaceComponent } from './ville-list-interface.component';

describe('VilleListInterfaceComponent', () => {
  let component: VilleListInterfaceComponent;
  let fixture: ComponentFixture<VilleListInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VilleListInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilleListInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
