import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/delay';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';


/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
    const apiUrl = 'http://localhost/test/api/';
  }

  getData(): Observable<any> {
    let response1 = this.http.get('http://localhost/test/api/t1/data.json');
    // let response2= this.http.get(apiUrl+'IN/110001');
    // let response3 = this.http.get(apiUrl+'BR/01000-000');
    // let response4 = this.http.get(apiUrl+'FR/01000');
    return forkJoin([response1]);
  }


  getProductsList(){
    let response2 = this.http.get('http://localhost:8100/assets/get-hindi.json');
    return forkJoin([response2]);
    // return this.http.get<any[]>('/assets/get-hindi-list.json').delay(100)
  }
  /**
  getProducts(){
    return this.http.get<any[]>('http://localhost/test/api/t1/data.json');
    // return this.http.get<any[]>('/assets/get-hindi.json').delay(50)

  }
    
  getHotcareerList(){
      return this.http.get<any[]>('http://localhost/test/api/t1/data.json');

      // return this.http.get<any[]>('/assets/get-hot-career.json').delay(50)
  }

   /***/


}
