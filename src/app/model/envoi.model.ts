import { Emetteur } from "./emetteur.model";
import { Recepteur } from "./recepteur.model";

export class Envoi{
    public id!:string;
    public dateenvoi!: string;
    public montant!:number;
    public emetteur =new Emetteur();
    public recepteur=new Recepteur ();
    
}