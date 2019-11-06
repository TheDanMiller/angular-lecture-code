import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-vakue',
  templateUrl: './show-vakue.component.html',
  styleUrls: ['./show-vakue.component.scss']
})
export class ShowVakueComponent implements OnInit {
  @Input() value: number;
  constructor() { }

  ngOnInit() {
  }

}
