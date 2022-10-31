import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ville } from 'src/app/models/ville';

@Component({
  selector: 'app-ville-list-interface',
  templateUrl: './ville-list-interface.component.html',
  styleUrls: ['./ville-list-interface.component.css']
})
export class VilleListInterfaceComponent implements OnInit {
  dataSource!: MatTableDataSource<ville>;

  @Input('ville')
  set villes(villes: ville[] | undefined) {
    this.dataSource = new MatTableDataSource<ville>(villes);
  };

  @Output('modifier') modifier : EventEmitter<ville> = new EventEmitter<ville>();
  @Output('supprimer') supprimer : EventEmitter<ville> = new EventEmitter<ville>();

  displayedColumns: string[] = [
    'nom',
    'codePostal',
    'actions'
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
