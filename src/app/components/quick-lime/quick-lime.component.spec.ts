import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLimeComponent } from './quick-lime.component';

describe('QuickLimeComponent', () => {
  let component: QuickLimeComponent;
  let fixture: ComponentFixture<QuickLimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
