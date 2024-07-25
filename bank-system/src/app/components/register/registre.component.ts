import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobaleService } from '../../service/globale.service';

@Component({
  selector: 'app-register',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private gl: GlobaleService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
  
    }, );
  }

  ngOnInit(): void {}

  register(): void {
    if (this.registerForm.valid) {
      this.gl.createUtilisateur(this.registerForm.value).subscribe((response: any) => {
        console.log('Registration successful:', response);
        console.log("/::::"+this.registerForm.value.username)
        console.log("/::::"+this.registerForm.value.email)
        console.log("/::::"+this.registerForm.value.password)
        this.router.navigate(['/login']); 
      }, (error: any) => {
        console.error('Registration failed:', error);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
