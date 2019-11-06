import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  sampleObject = {
    name: 'Dan',
    age: 36,
    children: [
      {
        name: 'Ben'
      },
      {
        name: 'Gavin'
      }
    ]
  };
  clickCount = 0;
  meInJson = {
    stuffForFooter: {
      myFavoriteSearchEngine: 'Google',
      bestMonthOfTheYear: 'July'
    }
  };
}
