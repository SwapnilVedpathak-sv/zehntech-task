import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../_helper/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  moviesData: any = [];
  selectedMovie: any = 'suspense'
  sub!: Subscription;

  constructor(private http: HttpService, private router: Router) { }

  movieCategories: any = [
    { name: 'Suspense', value: 'suspense' },
    { name: 'Drama', value: 'drama' }
  ]

  ngOnInit(): void {
    this.getMoviesData()
  }

  getMoviesData() {
    this.sub = this.http.getMoviesData(this.selectedMovie).subscribe((res) => {
      this.moviesData = res.results
      console.log("movieData", this.moviesData)
    })
  }

  viewMoviewDetails(id: any) {
    this.router.navigate(['/details'], { queryParams: { id: id } });
  }
}