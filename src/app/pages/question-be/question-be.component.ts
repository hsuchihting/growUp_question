import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DeleteSubjectRequest,
  GetFirstCategoryResponse,
  GetSecondCategoryResponse,
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

  userPageItem: any;
  search() {
    let thirdId = this.formBe.get('thirdSelect')?.value;
    this.getUserPageData(thirdId);
  }

  getUserPageData(param: string) {
    this._http.getUserPage(param).subscribe((res) => {
      console.log(res);
      this.userPageItem = res;
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

  edit(param: string) {
    this._router.navigate(['/edit-case', { id: param }]);
  }

  delete(param: string) {
    // alert(param);
    // console.log(param);

    let req: DeleteSubjectRequest = {
      subjectID: param,
    };
    this._http.deleteSubject(req).subscribe((res) => {
      alert('刪除成功');
    });
  }
}
