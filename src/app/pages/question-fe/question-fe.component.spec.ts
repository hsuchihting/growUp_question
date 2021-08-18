import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFeComponent } from './question-fe.component';

describe('QuestionFeComponent', () => {
  let component: QuestionFeComponent;
  let fixture: ComponentFixture<QuestionFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
