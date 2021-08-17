import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaBeComponent } from './qa-be.component';

describe('QaBeComponent', () => {
  let component: QaBeComponent;
  let fixture: ComponentFixture<QaBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
