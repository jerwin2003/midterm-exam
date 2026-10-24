
import { Component } from '@angular/core';
import { LoginPage } from './login-page/login-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginPage],
  template: `<app-login-page />`,
})
export class App {}
