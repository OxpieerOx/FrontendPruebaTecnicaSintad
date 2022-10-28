import { Injectable } from '@angular/core';

import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './../model/user'

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private urlService = environment.apiEndPoint + 'security/api/auth';

  constructor(private http: HttpClient) { }

  public getToken(user: User): Observable<any> {
    console.log(JSON.stringify(user));
    return this.http.post<any>(this.urlService, JSON.stringify(user), httpOptions).pipe(
      map((res: HttpResponse<any>) => {
        console.log("Show body: ", res.body);
        console.log("Show token: ", res.body.token);
        // if (res.headers.has("Authorization")) {
        //   user.token = res.headers.get("Authorization")!;
        //   localStorage.setItem('token', 'Bearer ' + res.headers.get("Authorization"));
        // }
        if (res.body.token) {
          user.token = res.body.token;
          localStorage.setItem('token', 'Bearer ' + res.body.token);
        }
        return user;
      }),
      catchError(this.handleError))
  }

  private handleError(error: any) {
    console.log("securityService error", error);
    return throwError("lanzando error: " + error);
  }
}
