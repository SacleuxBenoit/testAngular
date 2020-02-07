import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompoComponent } from './newcompo.component';

describe('NewcompoComponent', () => {
  let component: NewcompoComponent;
  let fixture: ComponentFixture<NewcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
