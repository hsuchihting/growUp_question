import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GetFirstCategoryResponse,
  GetMenuRes,
  GetSecondCategoryResponse,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';

@Component({
  selector: 'app-question-fe',
  templateUrl: './question-fe.component.html',
  styleUrls: ['./question-fe.component.scss'],
})
export class QuestionFeComponent implements OnInit {
  formFe!: FormGroup;
  //*上層分類下拉選單
  firstSelectData: GetFirstCategoryResponse[] = [];

  //*母分類下拉選單
  secondSelectData: GetSecondCategoryResponse[] = [];

  //*子分類下拉選單
  thirdSelectData: GetThirdCategoryResponse[] = [];

  //*menu
  getMenuData: GetMenuRes[] = [];

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
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.formFe.get('firstSelect')?.value;
    this._http.GetSecondCategory(firstId).subscribe((res) => {
      this.secondSelectData = res;
    });
  }

  getThirdDropdown() {
    let secondId = this.formFe.get('secondSelect')?.value;

    this._http.GetThirdCategory(secondId).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  getMenu() {
    this._http.getMenu().subscribe((res) => {
      Object.values(res).forEach((item) => {
        this.getMenuData = item;
      });
    });
  }
  search() {
    alert('search');
  }

  add() {
    this._router.navigate(['/add-type']);
  }

  detail() {
    this._router.navigate(['/question-detail']);
  }
}
