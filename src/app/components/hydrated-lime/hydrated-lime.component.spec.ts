import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydratedLimeComponent } from './hydrated-lime.component';

describe('HydratedLimeComponent', () => {
  let component: HydratedLimeComponent;
  let fixture: ComponentFixture<HydratedLimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydratedLimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydratedLimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
