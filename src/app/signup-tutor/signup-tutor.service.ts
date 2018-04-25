import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupTutorService {

  constructor(private http: HttpClient) { }
signup(data) {
  return this.http.post('', {
    'fullname': data.fullname,
    'username' : data.username,
    'password' : data.pass,
    'cpassword' : data.cpass,
    'email' : data.email,
    'age' : data.age,
    'cnic' : data.cnic,
    'gender' : data.gender,
    'cell' : data.cell,
    'address' : data.address,
    'per_statement' : data.ps,
    'education' : data.edu,
    'subject_expertise' : data.se,
    'experiance' : data.exp,
  });
}
}
