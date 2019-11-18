import { Component, OnInit } from '@angular/core';
import {StarWarsApiServiceService} from '../star-wars-api-service.service';
@Component({
  selector: 'app-api-call-example',
  templateUrl: './api-call-example.component.html',
  styleUrls: ['./api-call-example.component.scss']
})

export class ApiCallExampleComponent implements OnInit {
  lukeSkywalkerData$ = '';
  constructor(private starWarsService: StarWarsApiServiceService) { }

  ngOnInit() {
    console.log('Before the service call');
    this.starWarsService.getDataAboutLukeSkywalker()
      .subscribe(response => this.lukeSkywalkerData$ = response);
    console.log('After the service call');
  }

}
