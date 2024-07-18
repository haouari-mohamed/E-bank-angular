import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { GlobaleService } from '../service/globale.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent implements OnInit{
  listUsers:any
  ngOnInit(): void {
    this.gl.getAllUtilisateurs().subscribe(value=>{
      this.listUsers=value

    }

    )
    
  }

  constructor(private gl:GlobaleService  ){}
  

}
