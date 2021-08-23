import { HttpService } from './../../service/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  CreateSubjectRequest,
  GetFirstCategoryResponse,
  GetSecondCategoryRequest,
  GetSecondCategoryResponse,
  GetThirdCategoryRequest,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.scss'],
})
export class AddCaseComponent implements OnInit {
  addForm!: FormGroup;
  // date: Date = new Date();
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
  }

  createForm() {
    this.addForm = this._fb.group({
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
    let firstId = this.addForm.get('firstSelect')?.value;

    if (firstId) {
      this._http.GetSecondCategory().subscribe((res) => {
        console.log('secondSelectData:', res);
        this.secondSelectData = res;
      });
    }
  }

  getThirdDropdown() {
    let secondId = this.addForm.get('secondSelect')?.value;
    if (secondId) {
      this._http.GetThirdCategory().subscribe((res) => {
        console.log('thirdSelectData:', res);
        this.thirdSelectData = res;
      });
    }
  }

  save() {
    let param = this.addForm.get('thirdSelect')?.value;
    let req: CreateSubjectRequest = {
      thirdID: param,
    };
    this._http.createSubject(req).subscribe(
      (res) => {
        alert('新增成功');
        this._router.navigate(['/questionBe']);
      },
      (err) => {
        alert('傳送失敗');
      }
    );
  }
}
