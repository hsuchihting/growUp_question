import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EditSubjectRequest,
  EditSubjectResponse,
  GetFirstCategoryResponse,
  GetSecondCategoryRequest,
  GetSecondCategoryResponse,
  GetThirdCategoryRequest,
  GetThirdCategoryResponse,
} from 'src/app/model/createGroup-model';
import { HttpService } from 'src/app/service/http.service';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

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
  seq: string | null = '';
  caseList: EditSubjectResponse[] = [];
  case!: EditSubjectResponse;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _http: HttpService,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.seq = this._route.snapshot.paramMap.get('id');
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
    let firstId = this.editForm.get('firstSelect')?.value;
    console.log(firstId);

    this._http.GetSecondCategory(firstId).subscribe((res) => {
      this.secondSelectData = res;
    });
  }

  getThirdDropdown() {
    let secondId = this.editForm.get('secondSelect')?.value;
    this._http.GetThirdCategory(secondId).subscribe((res) => {
      this.thirdSelectData = res;
    });
  }

  save() {
    if (!this.seq) {
      this._router.navigate(['/question-be']);
    }
    let thirdName = this.editForm.get('id')?.value;
    let title = this.editForm.get('title')?.value;
    let answer = this.editForm.get('answer')?.value;
    let creditStatus = Number(this.editForm.get('creditStatus')?.value);

    console.log(title, answer, creditStatus);

    let req: EditSubjectRequest = {
      thirdname: thirdName,
      subjectID: this.seq || '',
      id: this.seq || '',
      subject: title,
      question: title,
      answer: answer,
      creditStatus: creditStatus,
    };

    this._http.editSubject(req).subscribe((res) => {
      this.caseList = res;
      this.case = this.caseList[0];
      console.log(this.case);

      this.editForm.patchValue({
        ...this.case,
      });
      console.log(res);
    });
  }

  back() {
    window.history.go(-1);
  }
}
