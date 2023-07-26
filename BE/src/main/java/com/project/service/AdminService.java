package com.project.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Admin;
import com.project.repo.AdminRepo;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepo adminRepo;
	
	public Admin getAdminByName(String adminname) {
		return adminRepo.findByAdminname(adminname);
	}
	
	public boolean validateAdmin(String name, String password) {
		Admin admin = new Admin();
		try {
			admin = getAdminByName(name);
		}catch(Exception e) {
			return false;
		}
		if(admin.getAdminpassword().equals(password))
			return true;
		else
			return false;
	}

}
