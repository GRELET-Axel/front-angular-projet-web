import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { campus } from '../models/campus';
import { sortie } from '../models/sortie';
import { CampusService } from '../_services/campus.service';
import { SortieService } from '../_services/sortie.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public displayedColumns = ['nomSortie', 'dateSortie', 'dateCloture', 'inscritplace', 'etat', 'inscrit', 'organisateur', 'actions'];
  sorties: sortie[] = [];
  public dataSource = new MatTableDataSource<sortie>();
  

  sortFunction: ((data: sortie[], sort: MatSort) => sortie[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private sortieService: SortieService,
  ) { }

  ngOnInit(): void {
    this.lister();
  }

  lister(){
    this.sortieService.getSorties()
      .pipe(first())
      .subscribe(
        value => {
          this.sorties = value
          this.dataSource.data = this.sorties;
          console.log(this.sorties)
        })
  }

  supprimer(campus: sortie) {
    // this.campusService.deleteCampus(campus.id).subscribe(
    //   value => {
      
    //       let index = -1
    //       for (let j = 0; j < this.campuss.length; j++) {
    //         if (this.campuss[j].id === campus.id) {
    //           index = j;
    //           this.campuss.splice(index, 1);
    //           break;
    //         }
    //         this.lister();
    //       }
    //     })
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
    this.dataSource.data = this.sorties;
  }
}
