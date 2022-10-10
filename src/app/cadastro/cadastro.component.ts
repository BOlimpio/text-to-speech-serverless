import { CognitoService } from './../services/cognito.service';
import { Component } from '@angular/core';
import { IUser } from '../services/cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router, private authService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.authService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.authService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      this.loading = false;
    });
  }

  public validarSenha(pass: any): any {
    var regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
        validator = regexp.test(pass);
    console.log(validator);
    if (validator === true){
      this.signUp();
    } else{
      alert("Por favor, a senha deve conter 8 caracteres, tendo letras mínusculas, maiúsculas, números e símbolos.");
    }
  }

}