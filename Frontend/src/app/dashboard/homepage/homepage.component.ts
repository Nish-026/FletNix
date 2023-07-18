import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

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
  movieTypes: any[] = ['TV Show', 'Movie'];
  movies: any = [];
  totalCount: number = 0;
  totalPages: number = 0;
  pagesToShow: any[] = [];
  isUserLogin: boolean = false;
  isMoviesLoading: boolean = true;
  errorMessage: string = '';

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    if(this.commonService.checkUserLogin()) {
      this.isUserLogin = true
      this.userData = localStorage.getItem('userData');
      this.userData = JSON.parse(this.userData);
      this.getMovies();
    } else {
      this.isUserLogin = false;
    }
  }

  applyMovieFilter = (movieType: string) => {
    this.movieType = movieType;
    this.page = 1;
    this.search='';
    this.getMovies();
  };

  makePaginationArray() {
    let startIndex = 1,
      endIndex = 1;
    if (this.totalPages < 10) {
      startIndex = 1;
      endIndex = this.totalPages;
    } else {
      if (this.page + 4 > this.totalPages) {
        endIndex = this.totalPages;
        startIndex = this.totalPages - 9;
      } else if (this.page - 4 < 1) {
        startIndex = 1;
        endIndex = 9;
      } else {
        startIndex = this.page - 4;
        endIndex = this.page + 4;
      }
    }
    this.pagesToShow = [];
    for (let i = startIndex; i <= endIndex; i++) this.pagesToShow.push(i);
    console.log(this.pagesToShow);
  }

  changePage = (pageIndex: number) => {
    this.page = pageIndex;
    this.getMovies();
  };

  searchMovie = () => {
    this.page = 1;
    this.getMovies();
  };

  seeMore = (movieDetails: any) => {
    this.commonService.setMovieDetails(movieDetails);
    this.router.navigate(['/detailsPage']);
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
      this.isMoviesLoading = false;
      if(data?.movies?.length) {
        this.errorMessage = '';
        this.movies = data.movies;
        this.page = parseInt(data.currentPage);
        this.pageSize = parseInt(data.pageSize);
        this.totalCount = parseInt(data.totalCount);
        this.totalPages = parseInt(data.totalPages);
        this.makePaginationArray();
      } else {
        this.errorMessage = "Something went wrong! Please try again later."
      }
    });
  };
}
