package com.hmsLogin.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.hmsLogin.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hmsLogin.repository.UserRepository;

@Service  
public class UserServices implements UserDetailsService{ 
    
	@Autowired
	private UserRepository userRepository;
	

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserModel userfound=userRepository.findByUsername(username);
		if(userfound==null) {
			return null;
		}
		
		String name=userfound.getUsername();
		String pswd=userfound.getPassword();
		String role=userfound.getRole();
		 List<GrantedAuthority> authorities =Arrays.stream(userfound.getRole().split(","))
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());//list of granted Authorities of a user

			//fetching each role of user from DB and storing them individually in list


		return new User(name,pswd ,authorities);
	}  

}
