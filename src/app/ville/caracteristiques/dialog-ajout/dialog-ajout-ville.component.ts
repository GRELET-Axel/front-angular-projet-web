import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ville } from "src/app/models/ville";

@Component({
  selector: 'app-dialog-ajout-ville',
  templateUrl: './dialog-ajout-ville.component.html',
  styleUrls: ['./dialog-ajout-ville.component.css']
})
export class DialogAjoutVilleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAjoutVilleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ville | null
  ) { }

  ngOnInit(): void {
  }

  annuler() {
    this.dialogRef.close();
  }

}
