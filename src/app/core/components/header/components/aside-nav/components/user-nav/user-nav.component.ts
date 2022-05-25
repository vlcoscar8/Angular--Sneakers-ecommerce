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
  public isLogged?: boolean;
  public username?: string;

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
    this.isLogged = this.userService.isLoggedIn();

    this.userService
      .getUserProfile(this.userService.userId())
      .subscribe((res) => (this.username = res.data.username));
  }

  public openForm(value: any) {
    this.buttonClicked = value.innerText;
  }

  public back() {
    this.buttonClicked = '';
  }

  public signup() {
    if (this.signupForm?.value) {
      this.userService
        .register(this.signupForm.value)
        .subscribe((res) => console.log(res));
    }
    this.closeNav?.emit(false);
  }

  public login() {
    if (this.loginForm?.value) {
      this.userService
        .login(this.loginForm.value)
        .subscribe((res) => console.log(res));
    }
    this.closeNav?.emit(false);
  }

  public logout() {
    this.userService.logout();
    this.closeNav?.emit(false);
  }

  public closeUserNav() {
    this.closeNav?.emit(false);
  }
}
