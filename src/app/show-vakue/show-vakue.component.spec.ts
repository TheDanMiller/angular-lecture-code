import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVakueComponent } from './show-vakue.component';

describe('ShowVakueComponent', () => {
  let component: ShowVakueComponent;
  let fixture: ComponentFixture<ShowVakueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVakueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVakueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
