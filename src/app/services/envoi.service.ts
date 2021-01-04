import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Envoi } from '../model/envoi.model';
import { from, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EnvoiService {

  private getUrl: string = "http://localhost:8080/api/envois"; 


  constructor(private _httpClient: HttpClient) { }


   getEnvoi(): Observable<Envoi[]>{

  return this._httpClient.get<Envoi[]>(this.getUrl).pipe(

    map(data => data)

    );
} 

addEnvoi(envoi: Envoi): Observable<Envoi>{
  return this._httpClient.post<Envoi>(this.getUrl+"/save",envoi);
  

    }

getEnv(id:any): Observable<any>{
  return this._httpClient.get<Envoi>(this.getUrl+"/get/"+id)
  
}


deleteEnvoi(id:number): Observable<any>{
  return this._httpClient.delete(`${this.getUrl}/${id}` , {responseType:'text'});
}

}
