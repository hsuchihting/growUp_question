import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _route: Router) {}
  detailForm!: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.detailForm = this._fb.group({
      thirdSelect: '',
      keyword: '',
    });
  }

  search(){
    alert('search')
  }
  goBack() {
    window.history.go(-1);
  }
}
