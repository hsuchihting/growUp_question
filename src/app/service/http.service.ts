import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RemoteAccessException } from '../model/remote-access-exception';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  post<T>(paramUrl: string, paramBody: object): Observable<T> {
    return this._http.post<T>(paramUrl, paramBody)
    // .pipe(
    //   catchError((err) => {
    //     if (err instanceof HttpErrorResponse) {
    //       return throwError(this.error(err));
    //     }
    //   })
    // );
  }

  // private error(err: HttpErrorResponse): RemoteAccessException {
  //   let result: RemoteAccessException;
  //   result = err.error;
  //   if (result.DetailErrorMessage) {
  //     result.DetailErrorMessage = result.DetailErrorMessage.split(',')[0];
  //   }
  //   return result;
  // }
}
