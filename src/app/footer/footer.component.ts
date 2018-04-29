import { FooterService } from './footer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {
form: FormGroup;
  constructor(private serv: FooterService, private fb: FormBuilder) {
    this.form = fb.group({
      'email': [null, Validators.compose([Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z]{2,}[.]{1}[a-zA-Z]*[.A-Za-z]{2,}'),
      Validators.required])],
      'description': [null, Validators.required]
    });
   }

  ngOnInit() {
  }

  submit(data) {
    if (this.form.valid) {
      this.serv.post(data).subscribe((result) => {

      });
    }
  }
}
