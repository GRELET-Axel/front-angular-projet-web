import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Participant } from '../models/Participant';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY5NDIxNzYsImV4cCI6MTY2Njk0NTc3Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoidGVzdEB0ZXN0LmZyIn0.PrBYODvqG1MUML5SUsISVm80lfzAK1Ci3Zramg3jg_kbILL7cqO8hOtgYG8tJ1kw2-nFKliONr0HnzDhKBJfUq9hmhKDBQa4MntgVnVqpwItWspGx-ITKtPgADEPQdRAfcXYxbDNGXYCW8d2I2wUSL-O7fCLOQcqRvuLJQiLw9amoacFYJ7r9dm0LIC9DtoKifggsbvr1zRfAh_Uw3sYUaO6JQivDUiYF1CzUwFOWNwwLqM4BhA0GB8ts5qPFkiDrltKeRxqE33_Wf8JMfe6Z0cSkBXpH7-w-wDlhCUUcxaJR-N1OJ1OhAcNKFigit_HfmLwq6FyKVqhskATXtgK9w"



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(idParticpant: number): Observable<Participant> {
    return this.httpClient.get<Participant>('https://localhost:8000/api/participants/' + idParticpant);
  }

}
