import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeClicksHappenComponent } from './make-clicks-happen.component';

describe('MakeClicksHappenComponent', () => {
  let component: MakeClicksHappenComponent;
  let fixture: ComponentFixture<MakeClicksHappenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeClicksHappenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeClicksHappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
