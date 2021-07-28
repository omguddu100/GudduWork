import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBreadcomComponent } from './dash-breadcom.component';

describe('DashBreadcomComponent', () => {
  let component: DashBreadcomComponent;
  let fixture: ComponentFixture<DashBreadcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBreadcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBreadcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
