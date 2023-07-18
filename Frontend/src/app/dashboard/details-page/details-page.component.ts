import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  movieDetails: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.movieDetails = this.commonService.getMovieDetails();
  }

}
