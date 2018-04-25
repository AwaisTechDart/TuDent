import { SignupGeneralService } from './../signup-general/signup-general.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupTutorService } from './signup-tutor.service';

@Component({
  selector: 'app-signup-tutor',
  templateUrl: './signup-tutor.component.html',
  styleUrls: ['./signup-tutor.component.css'],
  providers: [SignupTutorService]
})
export class SignupTutorComponent implements OnInit {
  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  formValues;
  checked = true;
  constructor(private fb: FormBuilder, private serv: SignupTutorService) {
    this.form = fb.group({
      'fullname': [null, Validators.required],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z0-9.]*')])],
      'pass' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'cpass' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'cnic' : [null, Validators.compose([Validators.required,
        Validators.minLength(13), Validators.pattern('[0-9]*'), Validators.maxLength(13)])],
      'age': [null, Validators.compose([Validators.required, Validators.min(12)])],
      'email': [null, Validators.compose([Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]*[.A-Za-z]{2,}')])],
      'gender': [null, Validators.required]
    });

    this.form1 = fb.group({
      'cell': [null, Validators.required],
      'address': [null, Validators.required],
      'ps' : [null, Validators.required],
      'edu' : [null, Validators.required],
      'exp' : [null, Validators.required],
      'se': [null, Validators.required],
    });

    this.form2 = fb.group({
      'agree': [null]
    });
  }

  ngOnInit() {
  }

  submit(data, data1, data2) {
    if (this.form.valid === true) {
      this.formValues = data;
      this.formValues = this.formValues + data1;
      this.formValues = this.formValues + data2;
      this.serv.signup(this.formValues).subscribe( (result) => {
        
      });
    }
  }

  abc() {
    if (this.checked === true) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }
}
