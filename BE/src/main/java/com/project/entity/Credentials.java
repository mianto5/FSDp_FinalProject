package com.project.entity;

public class Credentials {
	private String name;
	private String password;
	
	public Credentials() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Credentials(String name, String password) {
		super();
		this.name = name;
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
