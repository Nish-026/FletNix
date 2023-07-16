import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  userData: any;
  page: number = 1;
  pageSize: number = 15;
  search: string = '';
  movieType: string = '';
  movies: any = [];
  totalCount: number = 0;
  totalPages: number = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.userData = localStorage.getItem('userData');
    this.userData = JSON.parse(this.userData);
    this.getMovies();
  }

  getMovies = () => {
    let reqBody = {
      page: this.page,
      pageSize: this.pageSize,
      q: this.search,
      type: this.movieType,
      token: this.userData.token,
    };
    this.commonService.getMovies(reqBody).subscribe((data: any) => {
      this.movies = data.movies;
      this.page = data.currentPage;
      this.pageSize = data.pageSize;
      this.totalCount = data.totalCount;
      this.totalPages = data.totalPages;
    });
  };
}
