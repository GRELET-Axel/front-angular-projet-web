import { Component, OnInit } from '@angular/core';
import { campus } from '../models/campus';
import { Participant } from '../models/Participant';
import { TokenStorageService } from '../_services/token-storage.service';
import { ProfilService } from './../_services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  participant!: Participant;
  
  constructor(
    
    private profilService: ProfilService,
    private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit(): void {

    const user_id = this.tokenStorageService.getUser();
    
    this.profilService.getUsers(user_id)
      .subscribe(
        value => {
          this.participant = value,
          console.log(this.participant);
          
        });
  }

}
