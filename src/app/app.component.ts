import {Component, ViewChild} from '@angular/core';
import {RestService} from "./rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'expression-solver';
  @ViewChild('inputFieldComponent') private inputFieldComponent;

  constructor(public restService: RestService) {
  }

  addText(toInsert: string) {
    this.inputFieldComponent.inputElement.nativeElement.focus();
    let startPos = this.inputFieldComponent.inputElement.nativeElement.selectionStart;
    let value = this.inputFieldComponent.inputElement.nativeElement.value;
    this.inputFieldComponent.inputElement.nativeElement.value =
      value.substring(0, startPos) + toInsert + value.substring(startPos, value.length);
    this.inputFieldComponent.inputElement.nativeElement.selectionEnd = startPos + toInsert.length;
  }

  evaluateExpression() {
    let expression = this.inputFieldComponent.inputElement.nativeElement.value;
    this.restService.processExpression(expression, 'http://localhost:8080/api/expression/evaluate');
  }

}
