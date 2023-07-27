package com.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Genre;
import com.project.entity.Language;
import com.project.entity.Movie;
import com.project.service.GenreService;
import com.project.service.LanguageService;
import com.project.service.MovieService;

@RestController
@RequestMapping("/movies")
@CrossOrigin
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	@Autowired
	private GenreService genreService;
	@Autowired
	private LanguageService languageService;
	
	@GetMapping("/all")
	public List<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	@GetMapping("/available")
	public List<Movie> getAvailableMovies(){
		return movieService.getAvailableMovies();
	}
	
	@GetMapping("/genres")
	public List<Genre> getAllGenres(){
		return genreService.getAllGenres();
	}
	
	@GetMapping("/languages")
	public List<Language> getAllLanguages(){
		return languageService.getAllLanguages();
	}
	
	@GetMapping("/{mid}")
	public Optional<Movie> getMovieById(@PathVariable String mid){
		return movieService.getMovieById(mid);
	}
	
	@PutMapping("/status/{mid}")
	public void changeStatus(@RequestBody Movie movie){
		movieService.editMovie(movie);
	}
	
	@PostMapping("/add")
	public String addMovie(@RequestBody Movie movie) {
		System.out.println("Movie name: "+movie.getMoviename());
		movieService.addMovie(movie);
		return "YYY";
	}
	
	@PutMapping("/edit/{mid}")
	public String editMovie(@RequestBody Movie movie) {
		System.out.println("Movie ID: "+movie.getMid());
		movieService.editMovie(movie);
		return "YYY";
	}
	
	@DeleteMapping("/delete/{mid}")  
	private void deleteBook(@PathVariable String mid) {  
	movieService.deleteMovie(mid);  
	} 
	
	@PostMapping("/genres")
	public String addGenre(@RequestBody Genre genre) {
		System.out.println("Genre name: "+genre.getGenre());
		genreService.addGenre(genre);
		return "YYY";
	}
	
	@PostMapping("/languages")
	public String addLanguage(@RequestBody Language language) {
		System.out.println("Language name: "+language.getLanguage());
		languageService.addLanguage(language);
		return "YYY";
	}
	
}
