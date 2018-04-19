import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupTutorService {

  constructor(private http: HttpClient) { }
post(data) {
  return this.http.post('', {
    'fullname': data.fullname,
    'username' : data.username,
    'password' : data.pass,
    'cpassword' : data.cpass,
    'email' : data.email,
    'age' : data.age,
    'cnic' : data.cnic,
    'gender' : data.gender,
  });
}
}