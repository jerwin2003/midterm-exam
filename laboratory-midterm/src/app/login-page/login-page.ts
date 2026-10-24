

import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  onLogin(event: SubmitEvent): void {
    event.preventDefault();
    alert('Login form submitted!');
  }
}
