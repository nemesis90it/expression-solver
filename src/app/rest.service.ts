import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";


class ComputationResult {
  simplifiedForm: string
  numericValue: string
  derivative: string
  roots: string
  domain: string
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  response: ComputationResult = new ComputationResult();
  @Input() result: string;
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
    };
  }

  processExpression(expression, endpoint): void {
    let url = endpoint + '?expression=' + encodeURIComponent(expression);
    console.log("Calling [" + url + "]");

    this.http.get<ComputationResult>(url, {responseType: 'json'})
      .pipe(map(res => {
        return res || {};
      }))
      .subscribe(
        (restItems: ComputationResult) => {
          console.log(this.response);
          // this.response = restItems.tostring();
          this.response.simplifiedForm = "$" + restItems.simplifiedForm + "$";
          this.response.derivative = "$" + restItems.derivative + "$";
          this.response.domain = "$" + restItems.domain + "$";
          this.response.numericValue = "$" + restItems.numericValue + "$";
          this.response.roots = "$" + restItems.roots + "$";
        }
      );
  }
}
