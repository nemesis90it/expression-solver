import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @ViewChild('inputElement') inputElement;
  @Input() inputText: String;

  constructor() {
  }

  ngOnInit() {
  }

}
