package com.pro.vechileSystem.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pro.vechileSystem.model.User;
import com.pro.vechileSystem.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

	
	@Transactional
	public List<User> getApproval() {
		LOGGER.info("get Approval START");
		LOGGER.info("get Approval END");
		return this.userRepository.findNeededApproval();
	}

	@Transactional
	public void updateUserApproval(User user) {
		// TODO Auto-generated method stub
		LOGGER.info("update Approval START");
		LOGGER.info("update Approval END");
//		User user =this.userRepository.findByUsername(userName);
		user.setApproval(true);
		this.userRepository.save(user);
		
	}

	public void removeUser(int userId) {
		// TODO Auto-generated method stub
		LOGGER.info("removeFavoritesItem START");
		this.userRepository.deleteById(userId);
		LOGGER.info("removeFavoritesItem END");
		
	}
	
}
