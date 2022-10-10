import { CognitoService } from './../services/cognito.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'TEXT TO SPEECH - SERVERLESS APPLICATION';
  loading: boolean;

  constructor(private authService: CognitoService, private router: Router) {
    this.loading = false;
  }

  public usuarioEstaAutenticado(){
    return this.authService.usuarioEstaAutenticado();
  }

  public logout(): void {
    this.loading = true;
    this.authService.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    }).catch(() => {
      this.loading = false;
    });
  }

}
