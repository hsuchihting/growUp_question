//*取得上層下拉選單
export interface GetFirstCategoryResponse {
  id: string;
  firstgroupname: string;
}

//*取得母分類下拉選單
export interface GetSecondCategoryRequest {
  firstID: string;
}
export interface GetSecondCategoryResponse {
  secondID: string;
  secondgroupname: string;
}

//*取得子分類下拉選單
export interface GetThirdCategoryRequest {
  secondID: string;
}

export interface GetThirdCategoryResponse {
  thirdID: string;
  thirdgroupname: string;
}

//*新增群組
export interface CreateGroupRequest {
  id: string;
  firstgroupname: string;
  secondID: string;
  secondgroupname: string;
  thirdID: string;
  thirdgroupname: string;
}

//*取得群組清單
export interface GetMenuRes {
  id: string;
  firstName: string;
  secondItems: GetMenuSecondRes;
}

export interface GetMenuSecondRes {
  secondId: string;
  secondName: string;
  thirdItems: GetMenuThirdRes;
}

export interface GetMenuThirdRes {
  thirdID: string;
  thirdName: string;
}

//*新增群組內問與答
export interface CreateSubjectRequest {
  thirdID: string;
}

export interface CreateSubjectResponse {
  id: string;
  sequence: number;
  subject: string;
  release_date: string;
  estimate_invalid_date: string;
  question: string;
  answer: string;
  creditStatus: number;
}

//*Loading 特定群組與問答
export interface GetSubjectPageResponse {
  id: string;
  sequence: number;
  subject: string;
  release_date: string;
  estimate_invalid_date: string;
  question: string;
  answer: string;
  creditStatus: number;
}

//*編輯問與答
export interface EditSubjectRequest {
  thirdname: string;
  subjectID: string;
}

export interface EditSubjectResponse {
  id: string;
  sequence: number;
  subject: string;
  release_date: string;
  estimate_invalid_date: string;
  question: string;
  answer: string;
  creditStatus: number;
}

//*搜尋(Loading所有資料)
export interface GetSearchPageResponse {
  firstID: string;
  secondID: string;
  thirdID: string;
  searchstring: string;
  creditstatus: number;
}

//*取得特定群組內問與答
export interface GetUserPageRequest {
  thirdID: string;
}

export interface GerUserPageResponse {
  id: string;
  sequence: number;
  subject: string;
  release_date: string;
  estimate_invalid_date: string;
  question: string;
  answer: string;
  creditStatus: number;
}

//*刪除問與答
export interface DeleteSubjectRequest {
  subjectID: string;
}
