import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoVisualizerComponent } from './algo-visualizer.component';

describe('AlgoVisualizerComponent', () => {
  let component: AlgoVisualizerComponent;
  let fixture: ComponentFixture<AlgoVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
