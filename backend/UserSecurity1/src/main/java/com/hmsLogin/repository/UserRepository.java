package com.hmsLogin.repository;


import com.hmsLogin.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
	
	UserModel findByUsername(String username);

}
