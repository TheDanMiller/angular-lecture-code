import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increase-count-button',
  templateUrl: './increase-count-button.component.html',
  styleUrls: ['./increase-count-button.component.scss']
})
export class IncreaseCountButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickCount(event: any) {
    console.log(event);
    this.buttonClick.emit();
  }

}
