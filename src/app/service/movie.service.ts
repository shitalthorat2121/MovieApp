import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'assets/moviedata.json';

  constructor(private httpClient: HttpClient) { }

  getMovies(count: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.movieUrl)
      .pipe(
        catchError(this.handleError)
      )
      .pipe(
        map(movies => movies.sort((a, b) => b.year - a.year).slice(0, count))
      );

  }

  searchMovies(searchTerm: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.movieUrl)
      .pipe(
        catchError(this.handleError)
      )
      .pipe(
        map(movies => movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())))
      );
  }

  getMovieDetailsById(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.movieUrl)
      .pipe(
        catchError(this.handleError)
      )
      .pipe(
        map(movies => movies.find(movie => movie.info.rank === id))
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong.');
  }
}
