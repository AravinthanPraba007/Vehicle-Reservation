package com.pro.vechileSystem.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "vehicle")
public class Vehicle {
	@Id
	@Column(name = "vehicle_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "vehicle_name")
	private String name;

	@Column(name = "vehicle_price")
	private BigDecimal price;

	@Column(name = "vehicle_active")
	private boolean active;

	@Column(name = "vehicle_service_due_date")
	private Date service_due_date;

	@Column(name = "vehicle_type")
	private String type;

	@Column(name = "vehicle_image_url")
	private String imageUrl;

	
	@Column(name = "vehicle_insurance_expiry_date")
	private Date insurance_expiry_date;
	
	@Column(name = "vehicle_last_serviced_date")
	private Date last_serviced_date;
	
	@Column(name = "vehicle_number")
	private String number;
	
	@Column(name = "vehicle_branch")
	private String branch;
	
	
	@OneToOne(mappedBy="vehicle")
	private Booking booking;

	
	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
	
//	public Booking getBooking() {
//		return booking;
//	}

	
	@Column(name = "vehicle_status")
	private boolean status;
	
	
	
	
	public boolean isStatus() {
		return status;
	}




	public void setStatus(boolean status) {
		this.status = status;
	}




	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String title) {
		this.name = title;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Date getService_due_date() {
		return service_due_date;
	}

	public void setService_due_date(Date service_due_date) {
		this.service_due_date = service_due_date;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	
	
	
	public Date getInsurance_expiry_date() {
		return insurance_expiry_date;
	}

	public void setInsurance_expiry_date(Date insurance_expiry_date) {
		this.insurance_expiry_date = insurance_expiry_date;
	}

	public Date getLast_serviced_date() {
		return last_serviced_date;
	}

	public void setLast_serviced_date(Date last_serviced_date) {
		this.last_serviced_date = last_serviced_date;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}




	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", name=" + name + ", price=" + price + ", active=" + active
				+ ", service_due_date=" + service_due_date + ", type=" + type + ", imageUrl=" + imageUrl
				+ ", insurance_expiry_date=" + insurance_expiry_date + ", last_serviced_date=" + last_serviced_date
				+ ", number=" + number + ", branch=" + branch + ", status=" + status + "]";
	}




	public Vehicle(String name, BigDecimal price, boolean active, Date service_due_date, String type, String imageUrl,
			Date insurance_expiry_date, Date last_serviced_date, String number, String branch) {
		super();
		this.name = name;
		this.price = price;
		this.active = active;
		this.service_due_date = service_due_date;
		this.type = type;
		this.imageUrl = imageUrl;
		this.insurance_expiry_date = insurance_expiry_date;
		this.last_serviced_date = last_serviced_date;
		this.number = number;
		this.branch = branch;
	}




	public Vehicle(int id, String name, BigDecimal price, boolean active, Date service_due_date, String type,
			String imageUrl, Date insurance_expiry_date, Date last_serviced_date, String number, String branch) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.active = active;
		this.service_due_date = service_due_date;
		this.type = type;
		this.imageUrl = imageUrl;
		this.insurance_expiry_date = insurance_expiry_date;
		this.last_serviced_date = last_serviced_date;
		this.number = number;
		this.branch = branch;
	}

	


	

	
	
	
	

	

}
