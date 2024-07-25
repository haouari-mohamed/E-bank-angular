import { Component, OnInit } from '@angular/core';
import { GlobaleService } from '../../service/globale.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listUsers: any[] = [];
  compteBancaire : CompteBancaire[]= [];

  constructor(private gl: GlobaleService) {}

  ngOnInit(): void {
    this.gl.getAllUtilisateurs().subscribe((users: any[]) => {
      this.listUsers = users;
    }, (error: any) => {
      console.error('Failed to fetch users:', error);
    });

    this.gl.getCompteBancaire().subscribe((data: compteBancaire[]) => {
      this.compteBancaire = data;

  }



  logout(): void {
    localStorage.removeItem('token'); 
    window.location.href = '/login'; 
  }
}
