import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Envoi } from '../model/envoi.model'
import { EnvoiService } from '../services/envoi.service';
import { Emetteur } from '../model/emetteur.model';
import { Recepteur } from '../model/recepteur.model';



@Component({
  selector: 'app-add-envoi',
  templateUrl: './add-envoi.component.html',
  styleUrls: ['./add-envoi.component.scss']
})
export class AddEnvoiComponent implements OnInit {


  newEnvoi = new Envoi();
  envois: Envoi[] = [];

  newRecepteur = new Recepteur();
  recepteurs: Recepteur[] = [];

  newEmetteur: Emetteur = new Emetteur();
  emetteurs: Emetteur[] = [];


  constructor(private _envoiService: EnvoiService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {


    // const isIdPresent = this._activatedRoute.snapshot.params.has('id');
    // if (isIdPresent) {

    //   const id = parseInt(this._activatedRoute.snapshot.params.get('id'));
    //   this._envoiService.getEnv(id).subscribe(
    //     data => this.envois.push(data)
    //   )
    // }
  }
  // ListEnvoi(){

  //   console.log(this.newEnvoi);

  //   }
  addEnvoi(donnees: NgForm) {

    this._envoiService.addEnvoi(this.newEnvoi).subscribe(
      data => {
        console.log('response', data);

        this._router.navigateByUrl("/envois");
      }
    )

    donnees.resetForm();
  }

  deleteEnvoi(id: number) {
    this._envoiService.deleteEnvoi(id).subscribe(
      data => {
        console.log('delete response', data);
        this._router.navigateByUrl('/envois')
      }
    )
  }


}
