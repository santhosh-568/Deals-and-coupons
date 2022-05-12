package com.hmsLogin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class dealsCouponApplication {

	public static void main(String[] args) {

		SpringApplication.run(dealsCouponApplication.class, args);
		System.out.println("auth service is running....................");
	}

}
