import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ville } from '../models/ville';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Récupération des villes de l'API
   */
  public getVilles(): Observable<ville[]> {
    return this.httpClient.get<ville[]>('https://localhost:8000/api/villes.json', httpOptions);
  }
}
