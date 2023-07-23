package com.project.service;

// import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Movie;
import com.project.repo.MovieRepo;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepo movieRepo;
	
	public List<Movie> getAllMovies() {
		/*
		 * List<Movie> movies = new ArrayList<>();
		 * this.movieRepo.findAll().forEach(movie -> { Movie m = new Movie();
		 * 
		 * m.setmID(movie.getmID()); m.setMovieName(movie.getMovieName());
		 * m.setLanguage(movie.getLanguage()); m.setTicketPrice(movie.getTicketPrice());
		 * m.setDescription(movie.getDescription()); m.setImageURL(movie.getImageURL());
		 * m.setGenre(movie.getGenre()); m.setMovieDate(movie.getMovieDate());
		 * m.setMovieTime(movie.getMovieTime());
		 * m.setMovieEnabled(movie.isMovieEnabled());
		 * 
		 * movies.add(m); }); return movies;
		 */
		
		return (List<Movie>) movieRepo.findAll();
	}

}
