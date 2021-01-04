import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmetteurComponent } from './emetteur/emetteur.component';
import { RecepteurComponent } from './recepteur/recepteur.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { AddEmetteurComponent } from './add-emetteur/add-emetteur.component';
import { FormsModule } from '@angular/forms';
import { AddRecepteurComponent } from './add-recepteur/add-recepteur.component';
import { AddEnvoiComponent } from './add-envoi/add-envoi.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routers: Routes = [
  {path:'addrecepteur', component: AddRecepteurComponent},
  {path:'addemetteur', component: AddEmetteurComponent},
  {path:'addenvoi', component: AddEnvoiComponent},
  {path:'editemetteur', component: AddEmetteurComponent},

  
];



@NgModule({
  declarations: [
    AppComponent,
    EmetteurComponent,
    RecepteurComponent,
    EnvoiComponent,
    AddEmetteurComponent,
    AddRecepteurComponent,
    AddEnvoiComponent,
    // BindingComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule
  
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
