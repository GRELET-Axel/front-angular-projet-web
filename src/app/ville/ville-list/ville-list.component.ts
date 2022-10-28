import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first, Observable } from 'rxjs';
import { ville } from '../../models/ville';
import { VilleService } from '../../_services/ville.service';
import {MatDialog} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';


@Component({
  selector: 'app-ville',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {

  public displayedColumns = ['nomVille', 'codePostal', 'actions'];
  villes: ville[] = [];
  public dataSource = new MatTableDataSource<ville>();
  public dialog: MatDialog | undefined

  sortFunction: ((data: ville[], sort: MatSort) => ville[]) | undefined;
  titre = '';

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private villeService: VilleService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.lister()
  }

  lister() {
    this.villeService.getVilles()
      .pipe(first())
      .subscribe(
        value => {
          this.villes = value
          this.dataSource.data = this.villes;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }
  
  supprimer(ville: ville) {
    this.villeService.deleteVille(ville.id).subscribe(
      value => {
      
          let index = -1
          for (let j = 0; j < this.villes.length; j++) {
            if (this.villes[j].id === ville.id) {
              index = j;
              this.villes.splice(index, 1);
              break;
            }
            this.lister();
          }
        })
      }

  modifier(_t42: any) {
  throw new Error('Method not implemented.');
  }


  ajouter() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    }
}

  rafraichirListe() {
    this.dataSource.data = this.villes;
  }
}
