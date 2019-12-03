package com.pro.vechileSystem.repository;

import java.util.Set;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pro.vechileSystem.model.Booking;
import com.pro.vechileSystem.model.User;
import com.pro.vechileSystem.model.Vehicle;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

	Booking findByUser(User user);

}
