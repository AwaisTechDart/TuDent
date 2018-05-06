import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupGeneralService {

  constructor(private http:HttpClient) { }

  post(data){
    return this.http.post('assets/php/signup-general.php',{
      'fname': data.fullname,
      'uname': data.username,
      'pass': data.pass,
      'email': data.email,
      'cell': data.cell,
      'emgno': data.emNo,
      'cnic': data.cnic,
      'address': data.address
    });
  }

}
