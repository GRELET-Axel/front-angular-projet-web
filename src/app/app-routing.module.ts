import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CampusComponent } from './campus/campus.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { VilleComponent } from './ville/ville.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
{ path: 'profil', component: ProfilComponent },
{ path: 'ville', component: VilleComponent },
{ path: 'accueil', component: AccueilComponent },
{ path: 'campus', component: CampusComponent },
{ path: 'connexion', component: ConnexionComponent },
{ path: 'login', component: LoginComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
