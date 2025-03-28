import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleSignalsComponent } from './exemple-signals.component';

describe('ExempleSignalsComponent', () => {
  let component: ExempleSignalsComponent;
  let fixture: ComponentFixture<ExempleSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExempleSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempleSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
