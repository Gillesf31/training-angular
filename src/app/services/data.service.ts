import { NotFoundError } from './../not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../app-error';
import { BadRequestError } from '../bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
        .pipe(
            catchError(this.handleError)
        );
  }

  create(resource) {
    return throwError(new AppError());
    /*return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      catchError(this.handleError)
    );*/
  }

  update(resource, valueChange) {
    return this.http.patch(this.url + '/' + resource["id"], valueChange)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id) {
    //return throwError(new NotFoundError());
    return throwError(new AppError());
    /*return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError(this.handleError)
    );*/
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequestError(error));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }

    return throwError(new AppError(error));
  }
}
