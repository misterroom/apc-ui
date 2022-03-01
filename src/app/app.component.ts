import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apc-ui';

  mockApiResponse: Observable<string>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.mockApiResponse = this.httpClient.get('api/hello', {responseType: 'text'}).pipe(
      catchError((error: HttpErrorResponse) => of(error.message))
    )
  }
}
