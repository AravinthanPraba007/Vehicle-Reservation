package com.pro.vechileSystem;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VechileSystemApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(VechileSystemApplication.class);
	public static void main(String[] args) {
		LOGGER.debug("VechileSystemApplication Started");
		SpringApplication.run(VechileSystemApplication.class, args);
	}

}
