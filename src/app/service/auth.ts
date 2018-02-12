import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private name: string
  private head: string
  private token: string
  constructor(
    private http: HttpClient
  ) {}
  login() {
    
  }

  isLogin() {

  }

  fetchToken() {

  }
}