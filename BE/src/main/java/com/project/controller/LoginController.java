package com.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Admin;
import com.project.entity.Credentials;
import com.project.service.AdminService;

import jakarta.servlet.http.HttpSession;

@RestController
//@RequestMapping("/login")
@CrossOrigin
public class LoginController {
	
	@Autowired
	private AdminService adminService;
	
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
	
	@GetMapping("/logout")
	public void logout(HttpSession session) {
		System.out.println("logout page");
		session.removeAttribute("name");
		session.removeAttribute("role");
		session.invalidate();
	}

}
