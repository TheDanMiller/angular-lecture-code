import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChildComponentComponent } from './child-child-component.component';

describe('ChildChildComponentComponent', () => {
  let component: ChildChildComponentComponent;
  let fixture: ComponentFixture<ChildChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
