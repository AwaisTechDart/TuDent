import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  constructor(private http: HttpClient) { }

  post(data){
    return this.http.post('',{
      'email': data.email,
      'description': data.description
    });
  }
}
