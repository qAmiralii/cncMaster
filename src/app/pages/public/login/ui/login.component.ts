import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Login: Login = {
    username: '',
    password: '',
    keepMe: false
  }
  isValid() {
    if (this.Login.username.trim() == '' || this.Login.password == '') {
      return true;
    }
    return false;
  }

  //  private breakpointObserver = inject(BreakpointObserver);

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
}
