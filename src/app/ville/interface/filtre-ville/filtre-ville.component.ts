import { Component, OnInit } from '@angular/core';
import { FiltreVilleForm, recupererFiltreVille } from '../../utilitaires/filtre-ville.form';

@Component({
  selector: 'app-filtre-ville',
  templateUrl: './filtre-ville.component.html',
  styleUrls: ['./filtre-ville.component.css']
})
export class FiltreVilleComponent implements OnInit {
  form: FiltreVilleForm = recupererFiltreVille();

  constructor() { }

  ngOnInit(): void {
    
  }

}
