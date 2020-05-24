import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  response = "";
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

    this.http.get(url, {responseType: 'text'})
      .pipe(map(res => {
        return res.toString() || {};
      }))
      .subscribe(
        restItems => {
          // this.response = restItems.toString();
          this.response = "$" + restItems.toString() + "$";
          console.log(this.response);
        }
      );
  }

}
