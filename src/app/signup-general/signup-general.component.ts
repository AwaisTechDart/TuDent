import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SignupGeneralService } from './signup-general.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-general',
  templateUrl: './signup-general.component.html',
  styleUrls: ['./signup-general.component.css'],
  providers:[SignupGeneralService]
})
export class SignupGeneralComponent implements OnInit {
formG:FormGroup;
hide = true;
hide1 =true;
  constructor(private fb: FormBuilder, private service: SignupGeneralService,private snck:MatSnackBar,private router:Router ) {
    this.formG = fb.group({
      'fullname': [null,Validators.required],
      'username': [null,Validators.compose([Validators.required,Validators.minLength(3) ,,Validators.pattern('[A-Za-z0-9]*')])],
      'pass': [null,Validators.compose([Validators.required,Validators.minLength(8)])],
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
    if(this.formG.valid){
      this.service.post(data).subscribe((result)=>{
        if(result[0]==='success'){
          this.Msnck('Account created successfully');
          this.router.navigate(['application',{ id: result[1]}]);
        }else if(result[0]==='fail'){
          this.Msnck('User already exist');
        }else{
          this.Msnck('connection error!');            
        }
      });
    }
  }
  Msnck(message){
    this.snck.open(message,'x',{
      direction:"rtl",
      horizontalPosition:"start",
      duration:5000
    })
  }
}
