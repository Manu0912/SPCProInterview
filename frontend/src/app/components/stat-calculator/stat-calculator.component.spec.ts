import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCalculatorComponent } from './stat-calculator.component';

describe('StatCalculatorComponent', () => {
  let component: StatCalculatorComponent;
  let fixture: ComponentFixture<StatCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
