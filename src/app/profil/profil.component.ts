import { Component, OnInit } from '@angular/core';
import { campus } from '../models/campus';
import { Participant } from '../models/Participant';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ProfilService } from './../_services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
    nom: null,
    prenom: null,
    telephone: null
  };
  isSuccessful = false;

  participant!: Participant;
  isSignUpFailed: boolean | undefined;
  errorMessage: any;
  
  constructor(
    
    private profilService: ProfilService,
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
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

  onSubmit(): void {
    //update 
    const { email, password, nom, prenom, telephone, } = this.form;
    console.log('test submit profil')
    console.log(this.form)
    const user_id = this.tokenStorageService.getUser();
    this.participant.email = this.form.email;
    this.participant.nom = this.form.nom;
    this.participant.prenom = this.form.prenom;
    this.participant.telephone = this.form.telephone;
    

    this.authService.update(this.participant,user_id).subscribe(
        data => {
            console.log(data);
           this.isSuccessful = true;
           this.isSignUpFailed = false;
         },
          err => {
            this.errorMessage = err.error.message;
             this.isSignUpFailed = true;
           }
    )

  }


}
