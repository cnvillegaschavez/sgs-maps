import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable,  of  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === `${environment.serviceUrl}/api/Token`) {
      return next.handle(request);
    }

    if (sessionStorage.getItem('userTokenSiscal') == null) {
        return next.handle(request);
      }

    console.log('HEADERS:', request.url);
    const requestWithHeaders = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    });
    return next.handle(requestWithHeaders).pipe(catchError((error, caught) => {
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
     if (err.status === 401) {
      this.router.navigate([`/login`]);
      return of(err.message);
    }

     throw err;
  }

  getAccessToken(): string {
      return '';
  }
}
