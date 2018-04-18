import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupGeneralService } from './signup-general.service';

@Component({
  selector: 'app-signup-general',
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css'],
  providers:[SignupGeneralService]
})
export class SignupGeneralComponent implements OnInit {
formG:FormGroup;
  constructor(private fb: FormBuilder, private service: SignupGeneralService ) {
    this.formG = fb.group({
      'fullname': [null,Validators.required],
      'username': [null,Validators.compose([Validators.required,Validators.minLength(3) ,,Validators.pattern('[A-Za-z0-9]*')])],
      'pass': [null,Validators.compose([Validators.required,Validators.minLength(9)])],
      'copass': [null,Validators.compose([Validators.required,Validators.minLength(8)])],
      'cell': [null, Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      'emNo': [null, Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      'cnic':[null,Validators.compose([Validators.required,Validators.minLength(14),Validators.pattern('[0-9]*'),Validators.maxLength(14)])],
      'email': [null,Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9.-_]{1,}[@][A-Za-z]{2,}[.][A-Za-z]*[.A-Za-z]{2,}')])],
      'address': [null,Validators.required]

    });
   }

  ngOnInit() {
  }
  submit(data){
      if(this.formG.valid == true){
        this.service.post(data).subscribe((result)=>{

        });
      }
  }
}
