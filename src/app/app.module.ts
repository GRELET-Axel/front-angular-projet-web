import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CampusComponent } from './campus/campus.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MatIconModule } from '@angular/material/icon';
import { DialogAjoutVilleComponent } from './ville/caracteristiques/dialog-ajout/dialog-ajout-ville.component';
import { FiltreVilleComponent } from './ville/interface/filtre-ville/filtre-ville.component';
import { VilleListComponent } from './ville/caracteristiques/liste-ville/ville-list.component';
import { AjoutVilleComponent } from './ville/interface/ajout-ville/ajout-ville.component';
import { campus } from './models/campus';
import { VilleListInterfaceComponent } from './ville/interface/ville-list-interface/ville-list-interface.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CampusComponent,
    LoginComponent,
    NavbarComponent,
    ProfilComponent,
    RegisterComponent,
    DialogAjoutVilleComponent,
    VilleListComponent,
    AjoutVilleComponent,
    FiltreVilleComponent,
    VilleListInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule,
    MatTooltipModule,
    MatSortModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatIconModule, 
    ReactiveFormsModule, 
    MatDialogModule,
    MatOptionModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
