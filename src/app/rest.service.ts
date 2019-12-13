import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public response;
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
          this.response = restItems;
          console.log(this.response);
        }
      );
  }

}
