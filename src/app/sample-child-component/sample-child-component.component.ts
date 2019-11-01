import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-child-component',
  templateUrl: './sample-child-component.component.html',
  styleUrls: ['./sample-child-component.component.scss']
})
export class SampleChildComponentComponent {
  @Input() demographics: {};

}
