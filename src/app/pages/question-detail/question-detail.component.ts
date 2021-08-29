import { HttpService } from 'src/app/service/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GetThirdCategoryResponse } from 'src/app/model/createGroup-model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss'],
})
export class QuestionDetailComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _http: HttpService
  ) {}
  detailForm!: FormGroup;
  seq: any = '';
  //*子分類下拉選單
  thirdSelectData: any = [];
  ngOnInit(): void {
    this.seq = this._route.snapshot.paramMap.get('id');
    console.log(this.seq);

    this.createForm();
    this.getThirdDropdown();
  }

  createForm() {
    this.detailForm = this._fb.group({
      thirdSelect: this.seq,
      keyword: '',
    });
  }

  //*第三個下拉選單
  getThirdDropdown() {
    let param = this.seq?.toString();
    this._http.getSubjectPage(param).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  search() {
    alert('search');
  }
  goBack() {
    window.history.go(-1);
  }
}
