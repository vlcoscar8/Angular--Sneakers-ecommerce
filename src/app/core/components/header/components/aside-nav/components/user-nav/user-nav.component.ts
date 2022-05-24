import { UserService } from './../../../../../../services/user/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() public closeNav: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
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
    this.userService.register(formValue).subscribe((e) => console.log(e));
    this.closeNav?.emit(false);
  }

  public login() {
    const formValue = this.loginForm?.value;
    console.log(formValue);
  }
}
