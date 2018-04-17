import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-tutor',
  templateUrl: './signup-tutor.component.html',
  styleUrls: ['./signup-tutor.component.css']
})
export class SignupTutorComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'fullname': [null, Validators.required],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z0-9.]*')])],
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'cpass' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'cnic' : [null, Validators.compose([Validators.required,
        Validators.minLength(14), Validators.pattern('[0-9]*'), Validators.maxLength(14)])],
      'age': [null, Validators.compose([Validators.required, Validators.min(12)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9@]*')])],
      'gender': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
