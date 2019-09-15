import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputFieldComponent} from './input-field/input-field.component';
import {OutputFieldComponent} from './output-field/output-field.component';
import {InputButtonComponent} from './input-button/input-button.component';
import {EvalButtonComponent} from './eval-button/eval-button.component';
import {MathModule} from "../math/math.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MathModule,
    FormsModule
  ],
  exports: [
    OutputFieldComponent,
    InputFieldComponent,
    InputButtonComponent,
    EvalButtonComponent
  ],
  declarations: [InputFieldComponent, OutputFieldComponent, InputButtonComponent, EvalButtonComponent]
})
export class CalculatorModule {


}
