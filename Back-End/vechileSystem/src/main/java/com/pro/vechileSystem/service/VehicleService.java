package com.pro.vechileSystem.service;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pro.vechileSystem.model.Vehicle;
import com.pro.vechileSystem.repository.VehicleRepository;
import com.pro.vechileSystem.security.AppUserDetailsService;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;

	@Autowired
	private AppUserDetailsService appUserDetailsService;
	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleService.class);

	@Transactional
	public Set<Vehicle> getAllVehicleList() {
		LOGGER.info("getAll vehilce START");
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		LOGGER.debug("The user is   ---------" + user);
		if (user.equals("anonymousUser")) {
			LOGGER.info("user is anonymous");
			return this.getVehicleListCustomer();
		} else {
			UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			LOGGER.debug("the role is" + role);

			if (role.equals("ADMIN")) {
				LOGGER.debug("the role is " + role);
				return this.getVehicleListAdmin();
			} else {
				LOGGER.debug("the role is customer " + role);
				return this.getVehicleListCustomer();
			}
		}
	}

	@Transactional
	public Vehicle getVehicle(int vehicleId) {
		LOGGER.info("get vehicle START");
		LOGGER.info("get vehicle END");
		return this.vehicleRepository.findById(vehicleId).get();
	}

	@Transactional
	public void modifyVehicle(Vehicle vehicle) {
		LOGGER.info("ModifyVechile START");
		this.vehicleRepository.save(vehicle);
		LOGGER.info("Modify Vechile END");
	}

	@Transactional
	public void addVehicle(Vehicle vehicle) {
		LOGGER.info("Add Vechile START");
		this.vehicleRepository.save(vehicle);
		LOGGER.info("Add Vechile END");
	}

	@Transactional
	public Set<Vehicle> getVehicleListCustomer() {
		LOGGER.info("getVechileListCustomer START");
		LOGGER.info("getVechileListCustomer END");
		return this.vehicleRepository.getVehicleListCustomer();
	}

	@Transactional
	public Set<Vehicle> getVehicleListAdmin() {
		LOGGER.info("getVechileListAdmin START");
		LOGGER.info("getVechileListCustomer END");
		return this.vehicleRepository.getAllVehicleList();
		
	}

	public void removeVechile(int id) {
		// TODO Auto-generated method stub
		LOGGER.info("removeVehicle START");
		this.vehicleRepository.deleteById(id);
		LOGGER.info("removeVehicle END");
		
	}
	
	
}
