package com.pro.vechileSystem.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pro.vechileSystem.VechileSystemApplication;
import com.pro.vechileSystem.model.Booking;
import com.pro.vechileSystem.model.User;
import com.pro.vechileSystem.model.Vehicle;
import com.pro.vechileSystem.repository.BookingRepository;
import com.pro.vechileSystem.repository.UserRepository;
import com.pro.vechileSystem.repository.VehicleRepository;



@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	private static final Logger LOGGER = LoggerFactory.getLogger(BookingService.class);

	@Transactional
	public void addVehicleToBooking(String username, int vehicleID, Booking booking) {
		User user = userRepository.findByUsername(username);
		Optional<Vehicle> result = vehicleRepository.findById(vehicleID);
		Vehicle vehicle = result.get();
		vehicle.setStatus(true);
		vehicleRepository.save(vehicle);
		booking.setVehicle(vehicle);
		booking.setUser(user);
		
		Date d1 = booking.getBookingStart();
		Date d2 = booking.getBookingEnd();
		
		long diff = d2.getTime() - d1.getTime();
		long diffDays = diff / (24 * 60 * 60 * 1000);
		System.out.println(diffDays);
		BigDecimal total = vehicle.getPrice();
		BigDecimal days=new BigDecimal(diffDays);
		BigDecimal price=total.multiply(days);
//		float finalPrice= (float) (total * diffDays);
		booking.setPrice(price);
	System.out.println(price);
		  bookingRepository.save(booking);
	}
	
	@Transactional
	public Vehicle viewBooking(String username) {
		
//		return bookingRepository.UserVehicle(username);
		return null;
	}
	
	@Transactional
	public void CancelBooking(int bookingId, int vehicleID) {

		Optional<Vehicle> result = vehicleRepository.findById(vehicleID);
		Vehicle vehicle = result.get();
		vehicle.setStatus(false);
		vehicleRepository.save(vehicle);
		bookingRepository.deleteById(bookingId);
		
	}

	@Transactional
	public List<Booking> allBooking() {
		// TODO Auto-generated method stub
		
		return bookingRepository.findAll();
	}
	
	@Transactional
	public void payBooking(Booking booking) {
		
		booking.setPaid(true);
		this.bookingRepository.save(booking);
		
		
	}
}
