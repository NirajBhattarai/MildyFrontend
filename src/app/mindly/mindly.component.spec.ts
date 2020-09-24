import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindlyComponent } from './mindly.component';

describe('MindlyComponent', () => {
  let component: MindlyComponent;
  let fixture: ComponentFixture<MindlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
