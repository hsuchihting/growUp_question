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
  GetSearchPageRequest,
  GetSecondCategoryRequest,
  GetThirdCategoryRequest,
} from '../model/createGroup-model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  //*下拉第一大類
  GetFirstCategory(): Observable<any> {
    return this._http.get(`${this.apiUrl}/Groups/GetFirstCategory`);
  }

  //*下拉母分類
  GetSecondCategory(param: string): Observable<any> {
    return this._http.get(
      `${this.apiUrl}/Groups/GetSecondCategory?firstID=${param}`
    );
  }

  //*下拉子分類
  GetThirdCategory(param: string): Observable<any> {
    return this._http.get(
      `${this.apiUrl}/Groups/GetThirdCategory?secondID=${param}`
    );
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
  deleteSubject(param: string): Observable<any> {
    return this._http.delete(
      `${this.apiUrl}/Groups/DeleteSubject?subjectID=${param}`
    );
  }

  //*搜尋所有資料
  searchPage() {
    return this._http.get(`${this.apiUrl}/Groups/GetSearchPage`);
  }

  //*取得群組內問與答
  getSubjectPage(param: string) {
    return this._http.get(
      `${this.apiUrl}/Groups/GetSubjectPage=?thirdID=${param}`
    );
  }

  //*取得特定群組內問與答
  getUserPage(param: string) {
    return this._http.get(
      `${this.apiUrl}/UserSubject/GetUserPage?thirdID=${param}`
    );
  }

  getSearchPage(param?: GetSearchPageRequest) {
    return this._http.get(`${this.apiUrl}/Groups/GetSearchPage`);
  }
}
