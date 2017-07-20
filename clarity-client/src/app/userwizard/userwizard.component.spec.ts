import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwizardComponent } from './userwizard.component';

describe('UserwizardComponent', () => {
  let component: UserwizardComponent;
  let fixture: ComponentFixture<UserwizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
