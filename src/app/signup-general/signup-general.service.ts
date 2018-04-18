import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupGeneralService {

  constructor(private http:HttpClient) { }

  post(data){
    return this.http.post('',{
      'fullname': data.fullname,
      'username': data.username,
      'password': data.pass,
      'email': data.email,
      'cell': data.cell,
      'emNo': data.emNo,
      'cnic': data.cnic,
      'address': data.address
    });
  }

}
