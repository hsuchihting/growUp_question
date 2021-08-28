import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _router: Router,private _route:ActivatedRoute) {}
  detailForm!: FormGroup;
  seq: string | null = '';
  ngOnInit(): void {
    this.seq = this._route.snapshot.paramMap.get('id');
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
