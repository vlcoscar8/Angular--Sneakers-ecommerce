import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, tap } from 'rxjs';
import {
  IUser,
  IUserResponseApi,
  IUserResponseLogin,
} from './models/user.model';
import { environment } from 'src/environments/environment';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public userLogged$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private router: Router) {}

  public register(user: IUser): Observable<IUserResponseApi> {
    return this.httpClient
      .post<IUserResponseApi>(`${environment.apiUrl}/user/register`, user)
      .pipe(tap((res: IUserResponseApi) => {}));
  }

  public login(user: IUser): Observable<IUserResponseLogin> {
    return this.httpClient
      .post<IUserResponseLogin>(`${environment.apiUrl}/user/login`, user)
      .pipe(
        tap((res: IUserResponseLogin) => {
          const user = JSON.stringify({
            token: res.data.token,
            userId: res.data.userId,
          });
          localStorage.setItem(ACCESS_TOKEN, user);
          this.userLogged$.next(true);
          this.router.navigate(['']);
        })
      );
  }

  public logout() {
    let removeToken = localStorage.removeItem(ACCESS_TOKEN);
    this.userLogged$.next(false);

    if (removeToken === null) {
      this.router.navigate(['']);
    }
  }

  public isLoggedIn() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken !== null;
  }

  public getToken() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.token : null;
  }

  public userId() {
    let authToken = localStorage.getItem(ACCESS_TOKEN);
    return authToken ? JSON.parse(authToken)?.userId : null;
  }

  public getUserProfile(id: string): Observable<IUserResponseApi> {
    return this.httpClient.get<IUserResponseApi>(
      `${environment.apiUrl}/user/${id}`
    );
  }
}
