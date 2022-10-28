import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-ville-form',
  templateUrl: './ville-form.component.html',
  styleUrls: ['./ville-form.component.css']
})
export class VilleFormComponent implements OnInit {

  villeForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private villeService: VilleService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.villeForm = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }
}