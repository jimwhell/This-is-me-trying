import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Credentials } from 'src/app/interfaces/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  get email() {
    const emailValue = this.loginForm.get('email');
    if (emailValue !== null) {
      return emailValue;
    }
    return;
  }

  get password() {
    const passwordValue = this.loginForm.get('password');
    if (passwordValue !== null) {
      return passwordValue;
    }
    return;
  }

  loginUser() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (!email || !password) {
        return;
      }

      const credentials: Credentials = {
        email: email,
        password: password,
      };

      this.authService.login(credentials).subscribe({
        next: (response) => {
          console.log('User successfully logged in');
        },
        error: (err) => {
          console.error('Error in logging user: ', err);
        },
      });
    }
  }
}
