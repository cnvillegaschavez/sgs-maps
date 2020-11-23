﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {

  }

  canActivate(moduleCode: string): Promise<boolean>|boolean {
    return true;
  }

}
