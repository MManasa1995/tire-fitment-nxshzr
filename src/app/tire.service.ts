import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TireService {

  constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/years').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

  getMakes() : Promise<any>{
    return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/makes').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

    getModels() : Promise<any>{
    return this.http.get(' https://6080be3273292b0017cdbf2a.mockapi.io/models').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

    getStyles() : Promise<any>{
    return this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/trim').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }


}