import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiURL = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  registorUser(formData) {
    const token = '';
    return this.http.post(`${this.apiURL}/registor`, formData, this.setOptions(token, 'application/json'));
  }

  setOptions(token = '', contentType = 'application/json') {
    return { headers: new HttpHeaders({ ContentType: contentType, token: token }) };
  }

}
