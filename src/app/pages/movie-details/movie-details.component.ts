import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  movie: any;
  isLoading = true;
  similarMovies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private router: Router
  ) {}

  goBack() {
    this.location.back();
  }

  goToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  viewAllSimilar() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isLoading = true;
        this.movieService.getMovieDetails(+id).subscribe({
          next: (res) => {
            this.movie = res;
            this.isLoading = false;
          },
          error: () => (this.isLoading = false)
        });

        this.movieService.getSimilarMovies(+id).subscribe((res: any) => {
          this.similarMovies = res.results.slice(0, 4);
        });
      }
    });
  }


}

