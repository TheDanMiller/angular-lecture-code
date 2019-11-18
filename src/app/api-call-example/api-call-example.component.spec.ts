import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallExampleComponent } from './api-call-example.component';

describe('ApiCallExampleComponent', () => {
  let component: ApiCallExampleComponent;
  let fixture: ComponentFixture<ApiCallExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCallExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
