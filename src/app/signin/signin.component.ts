import { SigninService } from './signin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [SigninService]
})
export class SigninComponent implements OnInit {

  logForm: FormGroup;
  constructor(private fb: FormBuilder, private service:SigninService) { 
    this.logForm = fb.group({
      'username': [null,Validators.compose([Validators.required,Validators.minLength(3),
        Validators.pattern('[A-Za-z0-9@.]*')])],
      'password': [null,Validators.compose([Validators.required,Validators.minLength(8)])],
      'accType': [null,Validators.required]
    });
  }

  ngOnInit() {
  }

  submit(data){
    this.service.signin(data).subscribe((result)=>{

    });
  }
}
