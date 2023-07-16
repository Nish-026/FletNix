import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  signUp = (reqBody: any) => {
    return this.http.post(environment.serverUrl + '/user/signup', reqBody);
  };

  logIn = (reqBody: any) => {
    return this.http.post(environment.serverUrl + '/user/login', reqBody);
  };

  getMovies = (queryParams: any) => {
    let params = '';
    if (queryParams.page) params += 'page=' + queryParams.page;
    if (queryParams.q) params += '&q=' + queryParams.q;
    if (queryParams.type) params += '&type=' + queryParams.type;
    if (queryParams.pageSize) params += '&pageSize=' + queryParams.pageSize;

    const headers = new HttpHeaders().set('Authorization', queryParams.token);

    return this.http.get(environment.serverUrl + '/data/?' + params, {
      headers: headers,
    });
  };
}
