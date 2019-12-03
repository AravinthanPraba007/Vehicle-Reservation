package com.pro.vechileSystem.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	@NotNull
	int id;

	@NotNull
	@Column(name = "us_name")
	String username;

	@Column(name = "us_password")
	@NotNull(message = "Password should not be null")
	@NotBlank(message = "Password should not be blank")
	String password;

	@Column(name = "us_first_name")
	String firstName;

	@Column(name = "us_last_name")
	String lastName;

	@Column(name = "us_age")
	Integer age;

	@Column(name = "us_gender")
	String gender;
	
	@Column(name = "us_number")
	String number;
	
	@Column(name = "us_email")
	String email;
	
	@Column(name = "us_branch")
	String branch;
	
	@Column(name = "us_approval")
	Boolean approval;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_ro_id"))
	private Set<Role> roleList;
	
	
	@OneToOne(mappedBy="user")
	private Booking booking;
	

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}
	
	public User() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Set<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}

	
	

	public Integer getAge() {
		return age;
	}



	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getNumber() {
		return number;
	}



	public void setNumber(String number) {
		this.number = number;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public boolean isApproval() {
		return approval;
	}



	public void setApproval(boolean approval) {
		this.approval = approval;
	}

	

	public String getBranch() {
		return branch;
	}



	public void setBranch(String branch) {
		this.branch = branch;
	}



	public Boolean getApproval() {
		return approval;
	}



	public void setApproval(Boolean approval) {
		this.approval = approval;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", age=" + age + ", gender=" + gender + ", number=" + number + ", email="
				+ email + ", branch=" + branch + ", approval=" + approval + ", roleList=" + roleList + ", booking="
				+ booking + "]";
	}

	public User(@NotNull String username,
			@NotNull(message = "Password should not be null") @NotBlank(message = "Password should not be blank") String password,
			String firstName, String lastName, Integer age, String gender, String number, String email, String branch,
			Boolean approval) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.number = number;
		this.email = email;
		this.branch = branch;
		this.approval = approval;
	}

	public User(@NotNull int id, @NotNull String username,
			@NotNull(message = "Password should not be null") @NotBlank(message = "Password should not be blank") String password,
			String firstName, String lastName, Integer age, String gender, String number, String email, String branch,
			Boolean approval) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.number = number;
		this.email = email;
		this.branch = branch;
		this.approval = approval;
	}
	
	
		

	



	





}