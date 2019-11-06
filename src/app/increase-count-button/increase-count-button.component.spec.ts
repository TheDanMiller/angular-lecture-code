import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseCountButtonComponent } from './increase-count-button.component';

describe('IncreaseCountButtonComponent', () => {
  let component: IncreaseCountButtonComponent;
  let fixture: ComponentFixture<IncreaseCountButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseCountButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseCountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
