import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDashboardComponent } from './estoque-dashboard.component';

describe('EstoqueDashboardComponent', () => {
  let component: EstoqueDashboardComponent;
  let fixture: ComponentFixture<EstoqueDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
