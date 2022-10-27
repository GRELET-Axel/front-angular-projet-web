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

  public displayedColumns = ['nomVille', 'codePostal'];
  villes: ville[] = [];
  public dataSource = new MatTableDataSource<ville>();

  sortFunction: ((data: ville[], sort: MatSort) => ville[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private villeService: VilleService,
  ) { }

  ngOnInit(): void {
    console.log(this.villes)
    this.villeService.getVilles()
      .pipe(first())
      .subscribe(
        value => {
          this.villes = value
          this.dataSource.data = this.villes;
          console.log(this.villes)
        });    
        this.titre = 'Gérer les Villes';
  }

  // lister() {
  //   this.villeService.getVilles().subscribe(
  //     value => this.villes = value);
  // }

  // lister() {
  //   this.villeService.getVilles()
  //     .pipe(first())
  //     .subscribe(
  //       value => {
  //         this.villes = value
  //         this.dataSource.data = this.villes;
  //       });
  // }

  // rafraichirListe() {
  //   this.isLoading = true;
  //   this.dataSource.data = this.villes;
  //   this.isLoading = false;
  // }
}
