import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GerUserPageResponse,
  GetFirstCategoryResponse,
  GetMenuRes,
  GetSecondCategoryRequest,
  GetSecondCategoryResponse,
  GetThirdCategoryRequest,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question-be',
  templateUrl: './question-be.component.html',
  styleUrls: ['./question-be.component.scss'],
})
export class QuestionBeComponent implements OnInit {
  formBe!: FormGroup;

  //*上層分類下拉選單
  firstSelectData: GetFirstCategoryResponse[] = [];

  //*母分類下拉選單
  secondSelectData: GetSecondCategoryResponse[] = [];

  //*子分類下拉選單
  thirdSelectData: GetThirdCategoryResponse[] = [];
  userPageItem: GerUserPageResponse[] = [];
  // userPageItem: any = {};

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _http: HttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getFirstDropdown();
  }

  createForm() {
    this.formBe = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      keyword: '',
    });
  }

  search() {
    let thirdId = this.formBe.get('thirdSelect')?.value;
    this._http.getUserPage(thirdId).subscribe((res) => {
      console.log(res);
    });
  }

  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.formBe.get('firstSelect')?.value;
    this._http.GetSecondCategory(firstId).subscribe((res) => {
      this.secondSelectData = res;
    });
  }

  getThirdDropdown() {
    let secondId = this.formBe.get('secondSelect')?.value;

    this._http.GetThirdCategory(secondId).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  add() {
    this._router.navigate(['/add-case']);
  }

  edit() {
    this._router.navigate(['/edit-case']);
  }
}
