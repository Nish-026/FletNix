import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  movieDetails: any;

  constructor(private http: HttpClient) {}

  checkUserLogin = () => {
    if(localStorage.getItem('userData')) {
      return true;
    } else {
      return false;
    }
  }
  
  signUp = (reqBody: any) => {
    return this.http.post(environment.serverUrl + '/user/signup', reqBody);
  };

  logIn = (reqBody: any) => {
    return this.http.post(environment.serverUrl + '/user/login', reqBody);
  };

  setMovieDetails = (details: any) => {
    this.movieDetails = details;
  }

  getMovieDetails = () => {
    return this.movieDetails;
  }
  
  getMovies = (queryParams: any) => {
    let params = '';
    if (queryParams.page) params += 'page=' + queryParams.page;
    if (queryParams.q) params += '&q=' + queryParams.q;
    if (queryParams.type) params += '&type=' + queryParams.type;
    if (queryParams.pageSize) params += '&pageSize=' + queryParams.pageSize;

    const headers = new HttpHeaders().set('Authorization', queryParams.token);

    return this.http.get(environment.serverUrl + '/fletnix/data?' + params, {
      headers: headers,
    });
  };
}
