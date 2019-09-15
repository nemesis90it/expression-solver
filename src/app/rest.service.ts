import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private endpoint = 'http://localhost:8080/api/expression/evaluate';

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  private extractData(res: Response) {
    let body = res;
    console.log("Body: " + body);
    return body || {};
  }

  evaluateExpression(expression): Observable<any> {
    let url = this.endpoint + '?expression=' + encodeURIComponent(expression);
    console.log("Calling [" + url + "]");
    var result = null;
    this.http.get(url)
      .pipe(map(this.extractData))
      .subscribe(
        restItems => {
          result = restItems;
          console.log(result);
        }
      );

    return result;
  }

}
