  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Emetteur } from '../model/emetteur.model';
  import { EmetteurService } from '../services/emetteur.service';




  @Component({
    selector: 'app-add-emetteur',
    templateUrl: './add-emetteur.component.html',
    styleUrls: ['./add-emetteur.component.scss']
  })
  export class AddEmetteurComponent implements OnInit {


    newEmetteur: Emetteur =  new Emetteur();

    emetteurs: Emetteur[] = [];

    constructor(private _emetteurServices: EmetteurService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {


      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
      if (isIdPresent) {
        const id = parseInt(this._activatedRoute.snapshot.params.get('id'))  ;
        this._emetteurServices.getEmet(id).subscribe(
          data => this.emetteurs.push(data)   
        )
      }
      // this._emetteurServices.getEmetteur().subscribe(
      //   data => this.emetteur = data
      // )

    }

    addEmetteur(value:NgForm){  

      /*console.log(this.newEmetteur);*/
      
    this._emetteurServices.addEmetteur(this.newEmetteur).subscribe(
      data => {
          console.log('response', data);
          this._router.navigateByUrl("/emetteurs");
        }
    )
        // console.log(this.newEmetteur);
      // console.log(value.value);

      value.resetForm;
    }

  deleteEmetteur(id: number){
    this._emetteurServices.deleteEmetteur(id).subscribe(
      data => {
        console.log('delete response' , data);
        this._router.navigateByUrl('/emetteurs')
      }
    )
  }

    
  }
