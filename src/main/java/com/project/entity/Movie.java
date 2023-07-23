package com.project.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="movies")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mID;
	private String movieName;
	private String language;
	private double ticketPrice;
	private String description;
	private String imageURL;
	private String genre;
	private LocalDate movieDate;
	private LocalTime movieTime;
	private boolean movieEnabled;
	
	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Movie(String movieName, String language, double ticketPrice, String description, String imageURL,
			String genre, LocalDate movieDate, LocalTime movieTime, boolean movieEnabled) {
		super();
		this.movieName = movieName;
		this.language = language;
		this.ticketPrice = ticketPrice;
		this.description = description;
		this.imageURL = imageURL;
		this.genre = genre;
		this.movieDate = movieDate;
		this.movieTime = movieTime;
		this.movieEnabled = movieEnabled;
	}

	public int getmID() {
		return mID;
	}

	public void setmID(int mID) {
		this.mID = mID;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public double getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public LocalDate getMovieDate() {
		return movieDate;
	}

	public void setMovieDate(LocalDate movieDate) {
		this.movieDate = movieDate;
	}

	public LocalTime getMovieTime() {
		return movieTime;
	}

	public void setMovieTime(LocalTime movieTime) {
		this.movieTime = movieTime;
	}

	public boolean isMovieEnabled() {
		return movieEnabled;
	}

	public void setMovieEnabled(boolean movieEnabled) {
		this.movieEnabled = movieEnabled;
	}

}
