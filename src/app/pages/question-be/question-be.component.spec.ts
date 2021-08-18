import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBeComponent } from './question-be.component';

describe('QuestionBeComponent', () => {
  let component: QuestionBeComponent;
  let fixture: ComponentFixture<QuestionBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
