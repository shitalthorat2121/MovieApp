import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchText: string = '';
  movies: any[] = [];
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.getTopMovies();
  }

  getTopMovies() {
    this.movieService.getMovies(4)
      .subscribe(movies => {
        console.log(movies)
        this.movies = movies;
      });
  }

  searchMovies() {
    this.router.navigate(['/search'], { queryParams: { query: this.searchText } });
  }
}