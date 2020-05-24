import {Component, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";

@Component({
  selector: 'output-field',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.css']
})
export class OutputFieldComponent implements OnInit {

  public restService: RestService;

  constructor(restService: RestService) {
    this.restService = restService;
  }

  ngOnInit() {
  }

}
