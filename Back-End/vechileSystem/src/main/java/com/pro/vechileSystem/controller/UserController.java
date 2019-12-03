package com.pro.vechileSystem.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pro.vechileSystem.exception.UserAlreadyExistsException;
import com.pro.vechileSystem.model.User;
import com.pro.vechileSystem.repository.UserRepository;
import com.pro.vechileSystem.security.AppUserDetailsService;
import com.pro.vechileSystem.service.UserService;


@RestController
@RequestMapping("/users")
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserRepository userRepository;

	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@Autowired
	UserService userService;

	public static List<UserDetails> userDetailsList = new ArrayList<>();

	public UserController() {
		super();
	}
	
	@GetMapping("/approval")
	public  List<User> getVehicle() {
		LOGGER.info("get approval start");
		LOGGER.info("get approval end");
		return this.userService.getApproval();
	}

	@PutMapping("/approval")
	void addFavoritesItem(@RequestBody User user) {
		LOGGER.info("update user approval start"); 
		this.userService.updateUserApproval(user);
		LOGGER.info("update user approval end");
	}
	
	
	
	
	@PostMapping("")
	void signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		LOGGER.info("signUp START");
		appUserDetailsService.signUp(user);
		LOGGER.info("signUp END");
	}
	
	
	
	@DeleteMapping("/approval/{userId}")
	void removeFavoritesItem(@PathVariable String userId) {
		LOGGER.info("remove favorites start");
		int id = Integer.parseInt(userId);
		this.userService.removeUser(id);
		LOGGER.info("remove favorites end");
	}
	
	
}
