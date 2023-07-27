package com.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Admin;
import com.project.entity.Credentials;
import com.project.entity.User;
import com.project.service.AdminService;
import com.project.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin
public class LoginController {
	
	@Autowired
	private AdminService adminService;
	@Autowired
	private UserService userService;
	
	@PostMapping("/login/admin")
	public String validateAdmin(@RequestBody Credentials admin, HttpSession session){
		System.out.println("Adminname: "+admin.getName());
		System.out.println("Adminpassword: "+admin.getPassword());
		if(adminService.validateAdmin(admin.getName(), admin.getPassword())) {
			session.setAttribute("name", admin.getName());
			session.setAttribute("role", "admin");
		}
		return "XXX";
	}
	
	@PostMapping("/login/user")
	public void validateUser(@RequestBody Credentials user, HttpSession session){
		System.out.println("Username: "+user.getName());
		System.out.println("Userpassword: "+user.getPassword());
		if(userService.validateUser(user.getName(), user.getPassword())) {
			session.setAttribute("name", user.getName());
			session.setAttribute("role", "user");
		}
	}
	
	@PostMapping("/register")
	public void register(@RequestBody User user) {
		System.out.println("User name: "+user.getUsername());
		userService.register(user);
	}
	
	@GetMapping("/logout")
	public void logout(HttpSession session) {
		System.out.println("logout page");
		session.removeAttribute("name");
		session.removeAttribute("role");
		session.invalidate();
	}

}
