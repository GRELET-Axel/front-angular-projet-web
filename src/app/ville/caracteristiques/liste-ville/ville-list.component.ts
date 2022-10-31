import { throwDialogContentAlreadyAttachedError } from "@angular/cdk/dialog";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, combineLatest, startWith, switchMap, of, first } from "rxjs";
import { ville } from "src/app/models/ville";
import { VilleService } from "src/app/_services/ville.service";
import { FiltreVilleComponent } from "../../interface/filtre-ville/filtre-ville.component";
import { DialogAjoutVilleComponent } from "../dialog-ajout/dialog-ajout-ville.component";

@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {
  @ViewChild(FiltreVilleComponent, { static: true }) filtreVilleComponent!: FiltreVilleComponent;
  filteredList$!: Observable<ville[]>;
  villes: ville[] = [];
  ville!: ville;
  public dataSource = new MatTableDataSource<ville>();
    constructor(private villeService: VilleService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.filteredList$ = combineLatest([
    //  this.villeService.getVilles(),
    //   this.filtreVilleComponent.form!.valueChanges.pipe(startWith(this.filtreVilleComponent.form!.value))
    // ]).pipe(
    //  switchMap(([list, formChange]) =>
    //    of(list
    //      .filter(excursion => new RegExp(".*" + (formChange?.rechercher ?? "") + ".*").test(excursion.nom))
    //    )
    //  )
  //  )

  this.villeService.getVilles()
  //.pipe(first())
  .subscribe(
    value => {
      this.villes = value
      //this.dataSource.data = this.villes;

    });

    console.log(this.villes);

  }
  ajouterModifier(ville : ville | null){
    this.dialog.open(DialogAjoutVilleComponent, {
      data:ville
    });
  }
  // supprimer(ville : ville){

  // }
}
