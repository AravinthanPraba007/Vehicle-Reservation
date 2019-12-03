package com.pro.vechileSystem;

import static org.junit.Assert.assertEquals;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;
import java.util.Set;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.pro.vechileSystem.model.Vehicle;
import com.pro.vechileSystem.repository.BookingRepository;
import com.pro.vechileSystem.repository.UserRepository;
import com.pro.vechileSystem.repository.VehicleRepository;
import com.pro.vechileSystem.service.BookingService;
import com.pro.vechileSystem.service.UserService;
import com.pro.vechileSystem.service.VehicleService;


@RunWith(SpringRunner.class)
@FixMethodOrder

@SpringBootTest
public class VechileSystemApplicationTests {

	@Autowired
	VehicleService vehicleService;

	@Autowired
	BookingService bookingService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	BookingRepository bookingRepository;
	@Autowired
	VehicleRepository vehicleRepository;
	
	
	 int id=20;
	 String branch="Hitech";
	 Date insurance_expiry_date=new Date(2017-03-15);
	 Date last_serviced_date=new Date(2017-03-15);
	 BigDecimal price=new BigDecimal(310);
	 Date service_due_date=new Date(2017-03-15);
	 String number="TS 09 C 6600";
	 boolean active=false;
	 String imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPesC9fK58iXLaXNH14z5Orx2_TY3hTvaYQ-cpzIqrDVDF6nf6";
	 String type="SUV Car";
	 String name="Renault Duster";

		
	
//	Vehicle vehicle=new Vehicle();
	Vehicle vehicle= new Vehicle(20, name, price, active, service_due_date, type, imageUrl, insurance_expiry_date, last_serviced_date, number, branch);


	@Test
	public void getAdminVehicleList() {
		Set<Vehicle> vehicleList=vehicleService.getVehicleListAdmin();
		assertEquals(vehicleList.isEmpty(), false);
	}
	
	@Test
	public void getCustomerVehicleList() {
		Set<Vehicle> vehicleList=vehicleService.getVehicleListAdmin();
		assertEquals(vehicleList.isEmpty(), false);
	}
	
	@Test
	public void addVehicleList() {
		vehicleService.addVehicle(vehicle);
		Optional<Vehicle> vechile=this.vehicleRepository.findById(20);
		assertEquals(vechile.isPresent(), true);
	}
	
	@Test
	public void deleteVehicleList() {
		vehicleService.removeVechile(20);
		Optional<Vehicle> vechile=this.vehicleRepository.findById(20);
		assertEquals(vechile.isPresent(), true);
	}
	
	
	


}
