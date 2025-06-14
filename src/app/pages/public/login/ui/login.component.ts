import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../model/login';
import { map, Observable, shareReplay } from 'rxjs';




import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    MatToolbarModule,
    AsyncPipe,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  check() {
    this.onLogin = false;
    let result = this.auth.check(this.Login.username, this.Login.password);
    result.subscribe(x => {
      if (x == true) {
        this.router.navigateByUrl('/private')
      }

    })
    this.onLogin = false;
  }
  Login: Login = {
    username: '',
    password: '',
    keepMe: false
  }
  onLogin = true;
  isValid() {
    if (this.Login.username.trim() == '' || this.Login.password == '') {
      return true;
    }
    return false;
  }



  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
