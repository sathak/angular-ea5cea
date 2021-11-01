import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url)
  }
}