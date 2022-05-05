import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsViewComponent } from './pets-view.component';

describe('PetsViewComponent', () => {
  let component: PetsViewComponent;
  let fixture: ComponentFixture<PetsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
