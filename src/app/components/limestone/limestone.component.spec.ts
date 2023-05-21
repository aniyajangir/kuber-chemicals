import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimestoneComponent } from './limestone.component';

describe('LimestoneComponent', () => {
  let component: LimestoneComponent;
  let fixture: ComponentFixture<LimestoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimestoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
