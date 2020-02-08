import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestngforComponent } from './testngfor.component';

describe('TestngforComponent', () => {
  let component: TestngforComponent;
  let fixture: ComponentFixture<TestngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
