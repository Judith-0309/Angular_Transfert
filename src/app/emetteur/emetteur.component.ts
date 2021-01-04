import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Emetteur } from '../model/emetteur.model';
import {EmetteurService} from '../services/emetteur.service';
@Component({
  selector: 'app-emetteur',
  templateUrl: './emetteur.component.html',
  styleUrls: ['./emetteur.component.scss']
})

export class EmetteurComponent implements OnInit {

  emetteurs : Emetteur[];  //un tableau de chaine de caractere
  
  constructor(emetteurService: EmetteurService) { 
    this.emetteurs = [ ]; 
    
      // {idE : "1", nomE : "SAGNA",prenomE : "JLA", telephone : 771234567 , cniE :213455667788},
      // {idE : "2", nomE : "HANTA",prenomE : "MARIE", telephone : 771234567 , cniE:113455667788},
 
  emetteurService.getEmetteur().subscribe(
    data =>{
      this.emetteurs = data
    }
  )


} 

ngOnInit(): void {
  
}

}