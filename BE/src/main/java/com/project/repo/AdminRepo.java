package com.project.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Admin;

@Repository
public interface AdminRepo extends CrudRepository<Admin, String>{
	
	public Admin findByAdminname(String adminname);

}
