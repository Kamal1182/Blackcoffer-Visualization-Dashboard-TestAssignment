import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  private headers = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  get(url: string) : Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`, this.headers)
      .pipe(
        retry(1),
        catchError((res: any) => {
          return this.onRequestError(res);})
      )
      ;
  }

  onRequestError(res: any) {
    const statusCode = res.status;
    const body = res;

    const error = {
      statusCode : statusCode,
      error : body.error.error
    }

    console.log('from api.service.ts')
    console.log(error);

    throwError(error);

    return Observable.create((e: any) => {e.next(error)});
  }
}

