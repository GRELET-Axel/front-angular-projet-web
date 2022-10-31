import { Component, Input, OnInit } from '@angular/core';
import { ville } from 'src/app/models/ville';
import { AjoutVilleForm, recupererAjoutVille } from '../../utilitaires/ajout-ville.form';

@Component({
  selector: 'app-ajout-ville',
  templateUrl: './ajout-ville.component.html',
  styleUrls: ['./ajout-ville.component.css']
})
export class AjoutVilleComponent implements OnInit {
  @Input('ville') ville : ville | null = null;

  form : AjoutVilleForm = recupererAjoutVille();

  constructor() { }

  ngOnInit(): void {
    this.form?.patchValue({
      nom : this.ville?.nom,
      codePostal : this.ville?.codePostal
    })
  }
}
