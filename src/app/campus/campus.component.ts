import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { campus } from '../models/campus';
import { CampusService } from '../_services/campus.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  public displayedColumns = ['nomCampus'];
  campuss: campus[] = [];
  public dataSource = new MatTableDataSource<campus>();

  sortFunction: ((data: campus[], sort: MatSort) => campus[]) | undefined;
  titre = '';

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private campusService: CampusService,
  ) { }

  ngOnInit(): void {
    console.log(this.campuss)
    this.campusService.getCampuss()
      .pipe(first())
      .subscribe(
        value => {
          this.campuss = value
          this.dataSource.data = this.campuss;
          console.log(this.campuss)
        });    
        this.titre = 'Gérer les Campus';
  }
}