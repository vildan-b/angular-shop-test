import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class ProductService {
  path = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }
  getProducts(categoryId: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.path+"?categoryId="+categoryId).pipe(
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

  
  
