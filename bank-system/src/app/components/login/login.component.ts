import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobaleService } from '../../service/globale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private gl: GlobaleService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(): void {
    const user = this.loginForm.value;
    this.gl.login(user).subscribe((response: any) => {
      console.log('Login successful:', response);
      localStorage.setItem('token', response); 
      this.router.navigate(['/dashboard']); 
    }, (error: any) => {
      console.error('Login failed:', error);
    });
  }
}
