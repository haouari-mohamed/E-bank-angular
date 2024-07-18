import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class GlobaleService {
  private apiUrl = 'http://localhost:8083/api/utilisateurs';

  constructor(private http: HttpClient) {
   
   
}
getAllUtilisateurs(): Observable<Utilisateur[]> {
  return this.http.get<Utilisateur[]>(this.apiUrl);
}
}