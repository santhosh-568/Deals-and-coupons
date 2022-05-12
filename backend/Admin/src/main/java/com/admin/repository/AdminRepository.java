package com.admin.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.admin.model.Admin;


public interface AdminRepository extends MongoRepository<Admin, String> {

	Admin findByName(String name);

}
