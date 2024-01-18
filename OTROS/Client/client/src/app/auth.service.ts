import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login() {
    // Lógica de autenticación aquí
    // Después de autenticar con éxito
    this.isAuthenticated = true;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
