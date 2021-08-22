import { environment } from './../../environments/environment';
import { OptionModal } from './../model/OptionModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreateGroupRequest,
  CreateSubjectRequest,
  DeleteSubjectRequest,
  EditSubjectRequest,
  GetSecondCategoryRequest,
  GetThirdCategoryRequest,
} from '../model/createGroup-model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  options!: OptionModal;
  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'content/type': 'application/json',
      }),
    };
  }

  //*下拉第一大類
  GetFirstCategory(): Observable<any> {
    return this._http.get(`${this.apiUrl}/Groups/GetFirstCategory`);
  }

  //*下拉母分類
  GetSecondCategory(param: GetSecondCategoryRequest): Observable<any> {
    return this._http.post(`${this.apiUrl}/Groups/GetSecondCategory`, param);
  }

  //*下拉子分類
  GetThirdCategory(param: GetThirdCategoryRequest): Observable<any> {
    return this._http.post(`${this.apiUrl}/Groups/GetThirdCategory`, param);
  }

  //*新增群組
  createGroup(param: CreateGroupRequest): Observable<any> {
    return this._http.post(`${this.apiUrl}/Groups/CreateGroup`, param);
  }

  //*取得群組清單
  getMenu() {
    return this._http.get(`${this.apiUrl}/Groups/GetMenu`);
  }

  //*新增群組的問與答
  createSubject(param: CreateSubjectRequest): Observable<any> {
    return this._http.post(`${this.apiUrl}/Groups/CreatSubject`, param);
  }

  //*編輯問與答
  editSubject(param: EditSubjectRequest): Observable<any> {
    return this._http.patch(`${this.apiUrl}/Groups/EditSubject`, param);
  }

  //*刪除問與答
  deleteSubject(param: DeleteSubjectRequest): Observable<any> {
    return this._http.delete(
      `${this.apiUrl}/Groups/DeleteSubject?subjectID=${param}`
    );
  }

  //*搜尋所有資料
  searchPage() {
    return this._http.get(`${this.apiUrl}/Groups/GetSearchPage`)
  }



}
