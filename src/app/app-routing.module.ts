import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmetteurComponent } from './emetteur/emetteur.component';
import { RecepteurComponent } from './recepteur/recepteur.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { AddEmetteurComponent } from './add-emetteur/add-emetteur.component';
import { AddRecepteurComponent } from './add-recepteur/add-recepteur.component';
import { AddEnvoiComponent } from './add-envoi/add-envoi.component';



const routes: Routes = [
  {path : "emetteurs", component :EmetteurComponent},
  {path : "recepteurs", component :RecepteurComponent},
  {path : "envois" , component : EnvoiComponent },
  {path : "add-emetteur" , component : AddEmetteurComponent },
  {path : "add-recepteur" , component : AddRecepteurComponent },
  {path : "add-envoi" , component : AddEnvoiComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
