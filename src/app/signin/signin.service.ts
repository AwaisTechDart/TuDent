import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SigninService {

  constructor(private http: HttpClient) { }

  signin(data){
    return this.http.post('',{
      'username': data.username,
      'pass': data.password,
      'accType': data.accType
    });
  }
}
