import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie: any;
  movieId: any;
  searchText: string = '';
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.route.queryParams.subscribe(queryParams => {
      this.searchText = queryParams['searchText'];
      this.getMovieById();
    });
  }

  getMovieById() {
    this.movieService.getMovieDetailsById(this.movieId).subscribe(movie => {
      console.log(movie)
      this.movie = movie;
    });

  }
}


