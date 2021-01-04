  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { AddEmetteurComponent } from '../add-emetteur/add-emetteur.component';
  import { Emetteur } from '../model/emetteur.model';

  @Injectable({
    providedIn: 'root'
  })
  export class EmetteurService {
    
    private getUrl: string = "http://localhost:8080/api/emetteurs"; 

    constructor(private _httpClient: HttpClient) { }


    getEmetteur():Observable<Emetteur[]>{

    return this._httpClient.get<Emetteur[]>(this.getUrl);
  }


  addEmetteur(emetteur: Emetteur): Observable<Emetteur>{
    return this._httpClient.post<Emetteur>(this.getUrl+"/save",emetteur);
  }

  getEmet(idE: any): Observable<Emetteur>{
    return this._httpClient.get<Emetteur>(this.getUrl+"/get/"+idE)
    
  }

  deleteEmetteur(id:number): Observable<any>{
    return this._httpClient.delete(`${this.getUrl}/${id}` , {responseType:'text'});
  }



  }