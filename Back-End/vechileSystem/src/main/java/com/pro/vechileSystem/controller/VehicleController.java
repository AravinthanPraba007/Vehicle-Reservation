package com.pro.vechileSystem.controller;

import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pro.vechileSystem.model.Vehicle;
import com.pro.vechileSystem.service.VehicleService;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {
	@Autowired
	private VehicleService vehicleService;

	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleController.class);

	public void setVehicleService(VehicleService vehicleService) {
		LOGGER.info("set vehicle Service start");
		this.vehicleService = vehicleService;
		LOGGER.info("set vehicle Service end");
	}

	@GetMapping()
	public Set<Vehicle> getAllVehicle() {
		LOGGER.info("getAll vehicle List start");
		LOGGER.info("getAll vehicle List end");
		return this.vehicleService.getAllVehicleList();
	}

	@GetMapping("/{vehicleId}")
	public Vehicle getVehicle(@PathVariable int vehicleId) {
		LOGGER.info("get vehicle start");
		LOGGER.info("get vehicle end");
		return this.vehicleService.getVehicle(vehicleId);
	}

	@PutMapping()
	public void modifyMovies(@RequestBody Vehicle vehicle) {
		LOGGER.info("modify vehicle start");
		LOGGER.debug("start all vehicle" + vehicle);
		this.vehicleService.modifyVehicle(vehicle);
		LOGGER.info("modify vehicle end");
	}

	@PostMapping()
	public void addVehicle(@RequestBody Vehicle vehicle) {
		LOGGER.info("add vehicle start");
		LOGGER.debug("start" + vehicle);
		this.vehicleService.addVehicle(vehicle);
		LOGGER.info("add vehilce end");
	}

	@DeleteMapping("/{vehicleId}")
	void removeFavoritesItem(@PathVariable int vehicleId) {
		LOGGER.info("remove Vechile start");
//		int id = Integer.parseInt(vehicleId);
		this.vehicleService.removeVechile(vehicleId);
		LOGGER.info("remove Vechile end");
	}
	
}
