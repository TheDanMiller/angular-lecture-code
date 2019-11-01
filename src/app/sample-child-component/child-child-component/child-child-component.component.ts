import { Component,  Input} from '@angular/core';

@Component({
  selector: 'app-child-child-component',
  templateUrl: './child-child-component.component.html',
  styleUrls: ['./child-child-component.component.scss']
})
export class ChildChildComponentComponent {
@Input() children;

}
