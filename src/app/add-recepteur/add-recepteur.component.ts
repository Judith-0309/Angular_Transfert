  import { ValueConverter } from '@angular/compiler/src/render3/view/template';
  import { Component, OnInit } from '@angular/core';
  import { NgForm } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Recepteur } from '../model/recepteur.model';
  import { RecepteurService } from '../services/recepteur.service';

  @Component({
    selector: 'app-add-recepteur',
    templateUrl: './add-recepteur.component.html',
    styleUrls: ['./add-recepteur.component.scss']
  })

  export class AddRecepteurComponent implements OnInit {


    newRecepteur = new Recepteur();
    
    recepteurs: Recepteur[] = [];

    constructor(private _recepteurService: RecepteurService,
      private _router: Router,
      private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {



      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
      if (isIdPresent) {
        const id = parseInt(this._activatedRoute.snapshot.params.get('id')) ;
        this._recepteurService.getRecept(id).subscribe(
          data => this.recepteurs.push( data) 
        )
      }
    }

  addRecepteur(donnees:NgForm){
    
    this._recepteurService.addRecepteur(this.newRecepteur).subscribe(
      
      data => {

          console.log('response',data);

          this._router.navigateByUrl("/recepteurs");
      }
    )
    
    // clear the form
    donnees.resetForm();
    // console.log(this.newRecepteur);


  }

  deleteRecepteur(id: number){
    this._recepteurService.deleteRecepteur(id).subscribe(
      data =>{
        console.log('delete response' , data);
        this._router.navigateByUrl('/recepteurs')
      }
    )
  }






  }
