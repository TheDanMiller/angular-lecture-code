import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClickCountComponent } from './show-click-count.component';

describe('ShowClickCountComponent', () => {
  let component: ShowClickCountComponent;
  let fixture: ComponentFixture<ShowClickCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowClickCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClickCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
