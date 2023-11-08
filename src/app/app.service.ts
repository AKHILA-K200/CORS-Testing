import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  submitToServer(request : any){
    let id=''
    let params = new HttpParams();
    params = params.set('email', request.email);

    return this.http
      .get<any>(
        `http://66.29.152.193:8102/post-service/api/v1/interest/getAll?pageNumber=0&pageSize=20`,
        { }
      )
      .pipe(
        catchError((err: Error) => {
          const parsedError = JSON.parse(err.message);
          return of(parsedError);
        })
      ); 
  }

}
