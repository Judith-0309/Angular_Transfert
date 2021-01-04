import { Component, OnInit } from '@angular/core';
import { Emetteur } from '../model/emetteur.model';
import { Envoi } from '../model/envoi.model';
import { Recepteur } from '../model/recepteur.model';
import { EmetteurService } from '../services/emetteur.service';
import { EnvoiService } from '../services/envoi.service';
import { RecepteurService } from '../services/recepteur.service';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.scss']
})
export class EnvoiComponent implements OnInit {

  envois : Envoi[]; 
  emetteurs: Emetteur[] = [];
  recepteurs: Recepteur[] = [];

  constructor(envoiService : EnvoiService,
    private _emetteurServices: EmetteurService,
    private _recepteurServices: RecepteurService) {

    this.envois = [];
    
      // {id: "1", montant :20000, date: ("01/10/2020") },
      // {id: "2", montant :15000, date: ("05/11/2020") },
   
   

   envoiService.getEnvoi().subscribe(
    data => {
      this.envois = data
    }
   )
  }

  ngOnInit(): void {
  }

}
