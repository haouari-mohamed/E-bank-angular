import { Component, OnInit } from '@angular/core';
import { GlobaleService } from '../../service/globale.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listUsers: any[] = [];

  constructor(private gl: GlobaleService) {}

  ngOnInit(): void {
    this.gl.getAllUtilisateurs().subscribe((users: any[]) => {
      this.listUsers = users;
    }, (error: any) => {
      console.error('Failed to fetch users:', error);
    });
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token
    window.location.href = '/login'; // Redirect to login page
  }
}
