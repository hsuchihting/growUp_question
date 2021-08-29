import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DeleteSubjectRequest,
  GetFirstCategoryResponse,
  GetSearchPageRequest,
  GetSecondCategoryResponse,
  GetThirdCategoryResponse,
  GetUserPageResponse,
} from 'src/app/model/createGroup-model';

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
  page: number = 1;
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _http: HttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getFirstDropdown();
    this.getSearchPage();
  }

  createForm() {
    this.formBe = this._fb.group({
      firstSelect: '',
      secondSelect: '',
      thirdSelect: '',
      searchString: '',
      creditStatus: '',
    });
  }
  status: string | undefined = '';
  getSearchPage() {
    let param = this.formBe.getRawValue();
    let req: GetSearchPageRequest = {
      ...param,
    };

    this._http.getSearchPage(req).subscribe((res) => {
      this.userPageItem = res;
      this.userPageItem.forEach((item: any) => {
        console.log(item);
        this.status = this.creditStatusChange(item.creditStatus);
      });
    });
  }

  creditStatusChange(status: any) {
    let creditStatus = '';
    switch (status) {
      case 0:
        return (creditStatus = '已審核');
      case 1:
        return (creditStatus = '未審核');
      case 2:
        return (creditStatus = '審核中');
      default:
        return;
    }
  }

  //*搜尋按鈕
  userPageItem: any = [];
  search() {
    this.getUserPageData();
  }

  //*取得特定群組內問與答
  getUserPageData() {
    let thirdId = this.formBe.get('thirdSelect')?.value;
    this._http.getUserPage(thirdId).subscribe((res) => {
      this.userPageItem = res;
    });
  }

  //*第一個下拉選單
  getFirstDropdown() {
    this._http.GetFirstCategory().subscribe((res) => {
      this.firstSelectData = res;
    });
  }

  //*第二個下拉選單
  getSecondDropdown() {
    let firstId = this.formBe.get('firstSelect')?.value;
    this._http.GetSecondCategory(firstId).subscribe((res) => {
      this.secondSelectData = res;
    });
  }

  //*第三個下拉選單
  getThirdDropdown() {
    let secondId = this.formBe.get('secondSelect')?.value;
    this._http.GetThirdCategory(secondId).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  //*新增問答
  add() {
    this._router.navigate(['/add-case']);
  }

  //*編輯問答
  edit(param: string) {
    this._router.navigate(['/edit-case', { id: param }]);
  }

  //*刪除
  del(param: string) {
    console.log('param', param, typeof param);
    let paramStr = param.trim();

    this._http.deleteSubject(paramStr).subscribe(
      (res) => {
        alert('刪除成功');
        this.getSearchPage();
      },
      (err) => {
        alert('刪除失敗');
      }
    );
  }
}
