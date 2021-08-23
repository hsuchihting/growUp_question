import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GetFirstCategoryResponse,
  GetSecondCategoryResponse,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-edit-case',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.scss'],
})
export class EditCaseComponent implements OnInit {
  editForm!: FormGroup;
  //*上層分類下拉選單
  firstSelectData: GetFirstCategoryResponse[] = [];
  firstId: string = '';

  //*母分類下拉選單
  secondSelectData: GetSecondCategoryResponse[] = [];

  //*子分類下拉選單
  thirdSelectData: GetThirdCategoryResponse[] = [];
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _http: HttpService
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.getFirstDropdown();
    this.getSecondDropdown();
    this.getThirdDropdown();
  }

  createForm() {
    this.editForm = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      title: '',
      answer: '',
      audit: '',
      // date: this.date,
    });
  }

  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      console.log(res);
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.editForm.get('firstSelect')?.value;
    console.log(firstId);

    if (firstId) {
      this._http.GetSecondCategory().subscribe((res) => {
        console.log('secondSelectData:', res);
        this.secondSelectData = res;
      });
    }
  }

  getThirdDropdown() {
    let secondId = this.editForm.get('secondSelect')?.value;
    if (secondId) {
      this._http.GetThirdCategory().subscribe((res) => {
        console.log('thirdSelectData:', res);
        this.thirdSelectData = res;
      });
    }
  }
}
