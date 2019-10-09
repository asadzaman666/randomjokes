import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
     Accept: 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor( private http: HttpClient ) { }

  getRandomJokes() {
    return this.http.get('https://icanhazdadjoke.com/', httpOptions);
  }
}
