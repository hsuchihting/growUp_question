import { HttpService } from './../../service/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  CreateSubjectRequest,
  GetFirstCategoryResponse,
  GetSecondCategoryResponse,
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
      firstSelect: ['', [Validators.required]],
      secondSelect: ['', [Validators.required]],
      thirdSelect: ['', [Validators.required]],
      title: ['', [Validators.required]],
      answer: ['', [Validators.required]],
      audit: '1',
      // date: this.date,
    });
  }

  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      this.firstSelectData = res;
    });
  }

  getSecondDropdown() {
    let firstId = this.addForm.get('firstSelect')?.value;
    this._http.GetSecondCategory(firstId).subscribe((res) => {
      this.secondSelectData = res;
    });
  }

  getThirdDropdown() {
    let secondId = this.addForm.get('secondSelect')?.value;

    this._http.GetThirdCategory(secondId).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  save() {
    if (this.addForm.invalid) {
      alert('請輸入資料');
    } else {
      let thirdId = this.addForm.get('thirdSelect')?.value;
      let subject = this.addForm.get('title')?.value;
      let creditStatus = Number(this.addForm.get('audit')?.value);
      let answer = this.addForm.get('answer')?.value;

      let req: CreateSubjectRequest = {
        subject: subject,
        thirdID: thirdId,
        creditStatus: creditStatus,
        question: subject,
        answer: answer,
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

  back() {
    window.history.go(-1);
  }
}
