import { CognitoService, IUser } from './../services/cognito.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loading: boolean;
  user: IUser;

  constructor(private authService: CognitoService, private router: Router) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.loading = true;
    this.authService.signIn(this.user)
    .then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      this.loading = false;
    });
  }
}
