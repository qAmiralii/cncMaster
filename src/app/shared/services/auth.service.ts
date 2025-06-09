import { Injectable } from '@angular/core';
import { user } from '../../pages/public/login/model/login';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockUser: user[] = [
    { username: 'admin', password: '123', fullname: 'مدیر', enable: true },
    { username: 'gust', password: 'gust', fullname: 'میهمان', enable: true },
    { username: 'user', password: 'user', fullname: 'کاربر', enable: true },
  ]
  check(username: string, password: string) {
    let success = true;
    let result = this.mockUser.filter(x => x.username == username && x.password)
    if (result.length == 0) {
      success = true;
    }
    return of (success);
  }
}
