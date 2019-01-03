import { Component, OnInit } from '@angular/core';
//import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
//import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-singup',
  //templateUrl:'singup/singup.component.html',
  templateUrl:'singup.component.html'
 
})
export class SingupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
 // matcher = new MyErrorStateMatcher();
  // ]);

 
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

