import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaFeComponent } from './qa-fe.component';

describe('QaFeComponent', () => {
  let component: QaFeComponent;
  let fixture: ComponentFixture<QaFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaFeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
