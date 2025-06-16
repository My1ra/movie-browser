import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    FormsModule,
    MatProgressSpinnerModule,
    RouterModule,
   ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (res: any) => {
        this.movies = res.results;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch movies:', err);
        this.isLoading = false;
      },
    });
  }
  filteredMovies() {
    if (!this.searchTerm) return this.movies;
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

