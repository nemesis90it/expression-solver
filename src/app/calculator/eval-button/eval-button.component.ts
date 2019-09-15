import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'eval-button',
  templateUrl: './eval-button.component.html',
  styleUrls: ['./eval-button.component.css']
})
export class EvalButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<boolean>();

  handleClick() {
    this.clickEvent.emit();
  }

  ngOnInit() {
  }

}
