import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  movies: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.getSearchedText();
  }

  getSearchedText(){
    this.route.queryParams.subscribe(params => {
      this.searchText = params['query'];
      this.searchMovieByName();
    });
  }

  searchMovieByName() {
    this.movieService.searchMovies(this.searchText)
      .subscribe(movies => this.movies = movies);
  }
}


