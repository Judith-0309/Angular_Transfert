import { Component, OnInit } from '@angular/core';
import { Recepteur } from '../model/recepteur.model';
import { RecepteurService } from '../services/recepteur.service';


@Component({
  selector: 'app-recepteur',
  templateUrl: './recepteur.component.html',
  styleUrls: ['./recepteur.component.scss']
})
export class RecepteurComponent implements OnInit {

recepteurs : Recepteur[];

  constructor(recepteurService : RecepteurService) { 
    this.recepteurs = [];
    // this.recepteurs = [
    //   {idR : "1", nomR :"FALL",prenomR : "MAREME", telR : 771257698, cniR :21005695678},
    //   {idR : "2", nomR :"NIANG",prenomR : "ABDOU", telR : 771257698,cniR :12005695456},
    // ]

    recepteurService.getRecepteur().subscribe(
      data =>{
        this.recepteurs = data
      }
    )
    
} 

ngOnInit(): void {
}


  }

 

