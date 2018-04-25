import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupTutorService {

  constructor(private http: HttpClient) { }
  signup(data,data1,data2) {
    return this.http.post('', {
      'fullname': data.fullname,
      'username' : data.username,
      'password' : data.pass,
      'cpassword' : data.cpass,
      'email' : data.email,
      'age' : data.age,
      'cnic' : data.cnic,
      'gender' : data.gender,
      'cell' : data1.cell,
      'address' : data1.address,
      'per_statement' : data1.ps,
      'education' : data1.edu,
      'subject_expertise' : data1.se,
      'experiance' : data1.exp,
      'contract' : data2.agree
    });
  }
}
