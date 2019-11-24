import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhrComponent } from './mainhr.component';

describe('MainhrComponent', () => {
  let component: MainhrComponent;
  let fixture: ComponentFixture<MainhrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainhrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
