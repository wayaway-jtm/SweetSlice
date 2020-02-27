import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class myServer {

  constructor(private http : HttpClient) { }

  data;

  getData () {
    return this.http.get('http://localhost:3000').subscribe(
      (data) => this.data = { ...data }, 
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }
}
