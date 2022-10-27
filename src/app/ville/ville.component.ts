import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { ville } from '../models/ville';
import { VilleService } from '../_services/ville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  public displayedColumns = ['nomVille', 'codePostal','actions'];
  villes: ville[] = [];
  // item: ville;
  public dataSource = new MatTableDataSource<ville>();

  sortFunction: ((data: ville[], sort: MatSort) => ville[]) | undefined;

  titre = '';

  hasErrors = false;
  errors = '';

  isLoading = false;

  hasDroitAjout = false;
  hasDroitModif = false;
  hasDroitSuppr = false;

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private villeService: VilleService,
  ) { }

  ngOnInit(): void {
    console.log(this.villes)
    this.lister();
    this.titre = 'Gérer les Villes';
  }

  lister() {
    this.villeService.getVilles().subscribe(
      value => this.villes = value
    );
  }

  rafraichirListe() {
    this.isLoading = true;
    this.dataSource.data = this.villes;
    this.isLoading = false;
  }
}
