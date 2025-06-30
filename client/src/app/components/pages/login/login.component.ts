import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/authService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';


 constructor(private authService: AuthService, private router:Router) { }

 onLogin() {
  this.authService.login({email: this.email, password:this.password}).subscribe({
    next: (res) => {
      console.log('Login successful', res);
      this.router.navigate(['home']);
    },
    error: (err) => {
      console.error('Login failed', err);
    }
  })
 }
}
