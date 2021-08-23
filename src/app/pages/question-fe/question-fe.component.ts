import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GetFirstCategoryResponse,
  GetMenuRes,
  GetSecondCategoryRequest,
  GetSecondCategoryResponse,
  GetThirdCategoryRequest,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';
import { groupBy } from 'lodash';
import * as _ from 'lodash';
@Component({
  selector: 'app-question-fe',
  templateUrl: './question-fe.component.html',
  styleUrls: ['./question-fe.component.scss'],
})
export class QuestionFeComponent implements OnInit {
  formFe!: FormGroup;
  //*上層分類下拉選單
  firstSelectData: GetFirstCategoryResponse[] = [];
  firstId: string = '';

  //*母分類下拉選單
  secondSelectData: GetSecondCategoryResponse[] = [];

  //*子分類下拉選單
  thirdSelectData: GetThirdCategoryResponse[] = [];
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _http: HttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getFirstDropdown();
    this.getMenu();
  }

  createForm() {
    this.formFe = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      input: '',
    });
  }

  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      // console.log(res);
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.formFe.get('firstSelect')?.value;
    console.log('firstId:', firstId);

    if (firstId) {
      this._http.GetSecondCategory().subscribe((res) => {
        console.log('secondSelectData:', res);
        this.secondSelectData = res;
      });
    }
  }

  getThirdDropdown() {
    let secondId = this.formFe.get('secondSelect')?.value;
    if (secondId) {
      this._http.GetThirdCategory().subscribe((res) => {
        console.log('thirdSelectData:', res);
        this.thirdSelectData = res;
      });
    }
  }

  getMenuData: GetMenuRes[] = [];

  getMenu() {
    this._http.getMenu().subscribe((res) => {
      Object.values(res).forEach((item) => {
        this.getMenuData = item;
      });

      console.log('getMenuData', this.getMenuData);
    });
  }
  search() {
    alert('search');
  }

  add() {
    alert('add');
  }

  detail() {
    this._router.navigate(['/question-detail']);
  }
}
