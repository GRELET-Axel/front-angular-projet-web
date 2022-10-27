import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ville } from '../models/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Récupération des villes de l'API
   */
  public getVilles(): Observable<ville[]> {
    return this.httpClient.get<ville[]>('http://localhost:8000/api/villes');
  }
}
