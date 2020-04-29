import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDemo2Component } from './chart-demo2.component';

describe('ChartDemo2Component', () => {
  let component: ChartDemo2Component;
  let fixture: ComponentFixture<ChartDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
