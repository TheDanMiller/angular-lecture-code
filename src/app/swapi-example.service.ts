import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiExampleService {

  constructor(private http: HttpClient) { }

  public getLukeSkywalker() {
    return this.http.get('https://swapi.co/api/people/1');
  }
}
