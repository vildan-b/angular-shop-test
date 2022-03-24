import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {
  path = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { }
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap((data) => console.log(JSON.stringify(data) )),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage= ''

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'something went wrong ' + err.error.message
    
    }else{
      errorMessage = 'a system error'
    } 
    return throwError(errorMessage);
    }
  }

  
  
