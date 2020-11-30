import { OperationResult, OperationResultDto } from './../../shared/common';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { IUser } from './../interface';

@Injectable()
export class UserService {

  public headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' });
  constructor(private http: HttpClient) {

  }

  public login(user: IUser): Observable<any> {
    const url = environment.serviceUrl + '/api/Token';
    // tslint:disable-next-line:variable-name
    const _urlParams = 'grant_type=password&userName=' + user.userName + '&password=' + user.password;
    return this.http.post(url, _urlParams, { headers: this.headers });
  }

  public register(user: IUser): Observable<any> {
    return this.http.post(`/users/register`, user);
  }
}
