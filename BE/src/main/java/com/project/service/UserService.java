package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.User;
import com.project.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public User getUserByName(String username) {
		return userRepo.findByUsername(username);
	}
	
	public boolean validateUser(String name, String password) {
		User user = new User();
		try {
			user = getUserByName(name);
		}catch(Exception e) {
			return false;
		}
		if(user.getUserpassword().equals(password))
			return true;
		else
			return false;
	}
	
	public User register(User user) {
		return userRepo.save(user);
	}

}
