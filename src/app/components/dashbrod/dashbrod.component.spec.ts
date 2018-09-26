import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbrodComponent } from './dashbrod.component';

describe('DashbrodComponent', () => {
  let component: DashbrodComponent;
  let fixture: ComponentFixture<DashbrodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbrodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbrodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
