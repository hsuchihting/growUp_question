import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
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
  }

  createForm() {
    this.formBe = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      input: '',
    });
  }

  search() {
    alert('search');
  }
  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      console.log(res);
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.formBe.get('firstSelect')?.value;
    if (firstId) {
      this._http.GetSecondCategory().subscribe((res) => {
        console.log('secondSelectData:', res);
        this.secondSelectData = res;
      });
    }
  }

  getThirdDropdown() {
    let secondId = this.formBe.get('secondSelect')?.value;
    if (secondId) {
      this._http.GetThirdCategory().subscribe((res) => {
        console.log('thirdSelectData:', res);
        this.thirdSelectData = res;
      });
    }
  }

  add() {
    this._router.navigate(['/add-case']);
  }

  edit() {
    this._router.navigate(['/edit-case']);
  }
}
