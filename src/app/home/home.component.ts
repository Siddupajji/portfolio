import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  form: any;
  formuser: FormGroup;

  constructor() {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.formuser = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
    const scriptUrl =
      'https://script.google.com/macros/s/AKfycbz0GqICcDhkVm5gMOTo_YRQ1Vwi-QRND7cXN5ih0S0j2WwzSZuLRWLe0_aTFmWJj-iN/exec';
    const form = document.getElementById('formdata');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      fetch(scriptUrl, {
        method: 'POST',
        body: new FormData(form as HTMLFormElement),
      })
        .then((html) => {
          alert('Success');
          this.formuser.reset();
        })
        .catch((error) => console.error('Error', error.message));
    });
  }
}
