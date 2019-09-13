import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Input() text: String;
  @Output() clickEvent = new EventEmitter<boolean>();

  handleClick() {
    this.clickEvent.emit();
  }

  constructor() {
  }

  ngOnInit() {
  }


}
