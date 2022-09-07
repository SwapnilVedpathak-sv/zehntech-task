import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../_helper/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  movieData: any
  routeID: any

  constructor(private activatedRoute: ActivatedRoute, private http: HttpService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.routeID = params["id"];
      this.getMoviesData()
    })
  }

  ngOnInit(): void {
  }

  getMoviesData() {
    this.http.getMoviesData('', this.routeID).subscribe((res) => {
      this.movieData = res.result
      console.log("movieData", this.movieData)
    })
  }

}
