package com.pro.vechileSystem.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pro.vechileSystem.model.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{
	@Query(value = "SELECT v FROM Vehicle v  WHERE v.active=1")
	Set<Vehicle> getVehicleListCustomer();
	
	@Query(value="SELECT v FROM Vehicle v")
	Set<Vehicle> getAllVehicleList();
}
