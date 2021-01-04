import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Recepteur } from '../model/recepteur.model';
import { map }    from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RecepteurService {

private getUrl: string = "http://localhost:8080/api/recepteurs"; 

constructor(private _httpClient: HttpClient) { }


  getRecepteur(): Observable<Recepteur[]> {

    return this._httpClient.get<Recepteur[]>(this.getUrl).pipe(
      map(data => data)
    );
  }


  addRecepteur(recepteur: Recepteur): Observable<Recepteur>{
    return this._httpClient.post<Recepteur>(this.getUrl+"/save", recepteur);
  }


  getRecept(idR:any): Observable<Recepteur>{
    return this._httpClient.get<Recepteur>(this.getUrl+"/get/"+idR)
  }


deleteRecepteur(id:number): Observable<any>{
  return this._httpClient.delete(`${this.getUrl}/${id}` , {responseType:'text'});
}



}
