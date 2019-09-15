import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EvalButtonComponent} from './eval-button.component';

describe('AppEvalButtonComponent', () => {
  let component: EvalButtonComponent;
  let fixture: ComponentFixture<EvalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvalButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
