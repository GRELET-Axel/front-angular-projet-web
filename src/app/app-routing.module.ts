import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CampusComponent } from './campus/campus.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VilleListComponent } from './ville/caracteristiques/liste-ville/ville-list.component';

const routes: Routes = [  
{ path: 'profil', component: ProfilComponent , data:{requiresLogin: true} },
{ path: 'ville', component: VilleListComponent , data:{requiresLogin: true}},
{ path: 'accueil', component: AccueilComponent, data:{requiresLogin: true}},
{ path: 'campus', component: CampusComponent, data:{requiresLogin: true} },
{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
