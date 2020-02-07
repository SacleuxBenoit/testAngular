import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportclassComponent } from './importclass.component';

describe('ImportclassComponent', () => {
  let component: ImportclassComponent;
  let fixture: ComponentFixture<ImportclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
