import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailsModalComponent } from './pet-details-modal.component';

describe('PetDetailsModalComponent', () => {
  let component: PetDetailsModalComponent;
  let fixture: ComponentFixture<PetDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
