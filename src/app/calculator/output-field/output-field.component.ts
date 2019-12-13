import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'output-field',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.css']
})
export class OutputFieldComponent implements OnInit {

  @ViewChild('inputElement') inputElement;
  @Input() inputText: String;

  constructor() {
  }

  ngOnInit() {
  }

}
