import { UserService } from './../../core/services/user/user.service';
import { IUser } from './../../core/services/user/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userInfo?: IUser;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = this.userService.userId();

    this.userService.getUserProfile(userId).subscribe((user) => {
      this.userInfo = user.data;
    });
  }
}
