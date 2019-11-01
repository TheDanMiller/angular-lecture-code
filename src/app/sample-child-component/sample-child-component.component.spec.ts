import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChildComponentComponent } from './sample-child-component.component';

describe('SampleChildComponentComponent', () => {
  let component: SampleChildComponentComponent;
  let fixture: ComponentFixture<SampleChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
