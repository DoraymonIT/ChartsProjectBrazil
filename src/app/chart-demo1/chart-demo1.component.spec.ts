import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDemo1Component } from './chart-demo1.component';

describe('ChartDemo1Component', () => {
  let component: ChartDemo1Component;
  let fixture: ComponentFixture<ChartDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
