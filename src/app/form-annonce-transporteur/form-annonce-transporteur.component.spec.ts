import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnnonceTransporteurComponent } from './form-annonce-transporteur.component';

describe('FormAnnonceTransporteurComponent', () => {
  let component: FormAnnonceTransporteurComponent;
  let fixture: ComponentFixture<FormAnnonceTransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnnonceTransporteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnnonceTransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
