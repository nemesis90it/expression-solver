import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'eval-button',
  templateUrl: './eval-button.component.html',
  styleUrls: ['./eval-button.component.css']
})
export class EvalButtonComponent implements OnInit {

  @Input() text: String;
  @Output() clickEvent = new EventEmitter<boolean>();

  handleClick() {
    this.clickEvent.emit();
  }

  ngOnInit() {
  }

}
