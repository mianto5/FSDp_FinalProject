package com.project.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Movie;

@Repository
public interface MovieRepo extends CrudRepository<Movie, String>{

}
