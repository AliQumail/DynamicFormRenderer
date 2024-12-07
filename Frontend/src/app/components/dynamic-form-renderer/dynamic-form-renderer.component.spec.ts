import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRendererComponent } from './dynamic-form-renderer.component';

describe('DynamicFormRendererComponent', () => {
  let component: DynamicFormRendererComponent;
  let fixture: ComponentFixture<DynamicFormRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormRendererComponent]
    });
    fixture = TestBed.createComponent(DynamicFormRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
