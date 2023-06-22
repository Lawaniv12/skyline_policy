import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyManualComponent } from './policy-manual.component';

describe('PolicyManualComponent', () => {
  let component: PolicyManualComponent;
  let fixture: ComponentFixture<PolicyManualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyManualComponent]
    });
    fixture = TestBed.createComponent(PolicyManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
