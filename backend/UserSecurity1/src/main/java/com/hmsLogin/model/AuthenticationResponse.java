package com.hmsLogin.model;


public class AuthenticationResponse {
	
	private String response;

	public AuthenticationResponse(String response, String role) {
		this.response = response;
		this.role = role;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	private String role;
	public AuthenticationResponse() {
		
	}

	public String getResponse() {
		return response;
	}

	public void setResponse(String response) {
		this.response = response;
	}

	public AuthenticationResponse(String response) {
		this.response = response;
	}
	
	
	

	

}
