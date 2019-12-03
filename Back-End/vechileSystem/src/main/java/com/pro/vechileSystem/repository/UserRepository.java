package com.pro.vechileSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pro.vechileSystem.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);

	
	@Query(value = "SELECT * from vehicle_system.user AS u WHERE u.us_approval like '0'",nativeQuery = true)
	List<User> findNeededApproval();

//	@Query(value = "SELECT COUNT(*) AS no_of_favorites FROM movie_cruise.movie AS m INNER JOIN movie_cruise.favorites AS f ON m.mo_id = f.fa_mv_id WHERE f.fa_us_id = ?", nativeQuery = true)
//	Integer getNoOfFavorites(int userId);
	
	

}