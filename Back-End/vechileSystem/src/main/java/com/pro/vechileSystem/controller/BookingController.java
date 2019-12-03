package com.pro.vechileSystem.controller;

import java.util.List;
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

import com.pro.vechileSystem.exception.BookingEmptyException;
import com.pro.vechileSystem.model.Booking;
import com.pro.vechileSystem.model.User;
import com.pro.vechileSystem.model.Vehicle;
import com.pro.vechileSystem.repository.UserRepository;
import com.pro.vechileSystem.service.BookingService;
import com.pro.vechileSystem.service.UserService;




@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	@Autowired
	private UserRepository userRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(BookingController.class);
	
	
	@PostMapping("/{username}/{vehicleID}")
	public void addVehicleToBooking(@PathVariable String username, @PathVariable int vehicleID, @RequestBody Booking booking){
		
		LOGGER.info("entered into add booking ");
		  bookingService.addVehicleToBooking(username,vehicleID,booking);
	}
	@GetMapping("/{username}")
	public Booking viewBooking(@PathVariable String username){
		
//		 Vehicle vehicle = bookingService.viewBooking(username);
		
		User user= userRepository.findByUsername(username);
		if(user.getBooking()!=null){
		Booking booking= user.getBooking();
		Vehicle vehicle = booking.getVehicle();
		return booking;
		}
		return null;
	}
	
	@GetMapping()
	public List<Booking> viewAllBooking(){
		
		return bookingService.allBooking();
	}
	
	
	@DeleteMapping("/{bookingId}/{vehicleID}")
	public void CancelBooking(@PathVariable int bookingId, @PathVariable int vehicleID){
		LOGGER.info("entered delete booking"+bookingId);
		bookingService.CancelBooking(bookingId,vehicleID);
	}
	
	@PutMapping("/{userName}")
	void payBooking(@RequestBody Booking booking,@PathVariable String userName) {
		LOGGER.info("update user pay start"); 
		User user= userRepository.findByUsername(userName);
		Booking book= user.getBooking();
		this.bookingService.payBooking(book);
		LOGGER.info("update user p end");
	}
}
