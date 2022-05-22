import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {
  public buttonClicked: string = '';
  public loginForm?: FormGroup;
  public signupForm?: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
        Validators.required,
      ]),
    });

    this.signupForm = this.fb.group({
      username: new FormControl('', [
        Validators.pattern('[A-Za-z]*'),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.buttonClicked = '';
  }

  public openForm(value: any) {
    this.buttonClicked = value.innerText;
  }

  public back() {
    this.buttonClicked = '';
  }

  public signup() {
    const formValue = this.signupForm?.value;
    console.log(formValue);
  }

  public login() {
    const formValue = this.loginForm?.value;
    console.log(formValue);
  }
}
