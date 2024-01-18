import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ButtonLoginStyles } from '../../../app/models/StylesPrime';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  autenticacionExitosa: boolean = true;
  constructor(private authService: AuthService, private router: Router) { }

  buttonStyle = ButtonLoginStyles.primary;

  login() {
    if (this.autenticacionExitosa) {
      this.authService.login();
      this.router.navigate(['/']); // Redirige a la página principal
    }
  }
}
