package com.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Movie;
import com.project.service.MovieService;

@RestController
@RequestMapping("/movies")
@CrossOrigin
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	
	@GetMapping("/all")
	public List<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	@GetMapping("/{mid}")
	public Optional<Movie> getMovieById(@PathVariable String mid){
		return movieService.getMovieById(mid);
	}

}
