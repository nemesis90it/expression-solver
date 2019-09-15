import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CalculatorModule} from './calculator/calculator.module';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MathModule} from './math/math.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    FormsModule,
    MathModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
