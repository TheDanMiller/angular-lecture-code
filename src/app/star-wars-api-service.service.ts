import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiServiceService {

  constructor(private localHttpClient: HttpClient) { }

  public getDataAboutLukeSkywalker() {
    return this.localHttpClient.get('https://swapi.co/api/people/1');
  }
}
