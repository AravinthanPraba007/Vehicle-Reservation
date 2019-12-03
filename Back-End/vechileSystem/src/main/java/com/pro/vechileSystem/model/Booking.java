package com.pro.vechileSystem.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="booking_id")
	private int id;
		
	@Column(name="booking_start_date")
	private Date bookingStart;
	
	@Column(name="booking_end_date")
	private Date bookingEnd;
	
	@Column(name="booking_price")
	private BigDecimal price;
	

	@Column(name = "booking_paid")
	private boolean paid;
	
	@OneToOne
	@JoinColumn(name="booking_us_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name="booking_vh_id")
	private Vehicle vehicle;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getBookingStart() {
		return bookingStart;
	}

	public void setBookingStart(Date bookingStart) {
		this.bookingStart = bookingStart;
	}

	public Date getBookingEnd() {
		return bookingEnd;
	}

	public void setBookingEnd(Date bookingEnd) {
		this.bookingEnd = bookingEnd;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

//	public User getUser() {
//		return user;
//	}

	public void setUser(User user) {
		this.user = user;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", bookingStart=" + bookingStart + ", bookingEnd=" + bookingEnd + ", price="
				+ price + ", paid=" + paid + "]";
	}

	public Booking(int id, Date bookingStart, Date bookingEnd, BigDecimal price, boolean paid, Vehicle vehicle) {
		super();
		this.id = id;
		this.bookingStart = bookingStart;
		this.bookingEnd = bookingEnd;
		this.price = price;
		this.paid = paid;
		this.vehicle = vehicle;
	}
	
	
	
	
	
	
	
	
	
	
	

}
