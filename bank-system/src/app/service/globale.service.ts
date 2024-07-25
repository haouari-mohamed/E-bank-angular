import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GlobaleService {
  private apiUrl = 'http://localhost:8083/api/utilisateurs';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
  }

  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }
  
  getCompteBancaire() : Observable <CompteBancaire[]>{
    return this.http.get<CompteBancaire[]>(this.apiUrl,{ headers: this.getAuthHeaders() } )
  }

  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/create`, utilisateur, { headers: this.getAuthHeaders() });
  }

  login(user: Utilisateur): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'text' });
  }
}
