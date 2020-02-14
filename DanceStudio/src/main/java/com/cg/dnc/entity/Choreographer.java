package com.cg.dnc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "byChorUserName", query = "FROM Choreographer WHERE userName=:userName")
@NamedQuery(name = "getByChoreographerId", query = "FROM Choreographer WHERE choreographerId=:choreographerId")
@NamedQuery(name = "findChoreographer", query = "FROM Choreographer WHERE danceStyle=:danceStyle AND place=:place AND timePref=:timePref")
@NamedQuery(name = "getAllChoreographer", query = "FROM Choreographer")
@NamedQuery(name = "getChoreographerByName", query = "FROM Choreographer WHERE fName=:fName AND lName=:lName")
@NamedQuery(name = "getChoreographerByDanceStyle", query = "FROM Choreographer WHERE danceStyle=:danceStyle")
public class Choreographer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int choreographerId;
	@Column(length = 50, unique = true)
	private String userName;
	@Column(length = 50)
	private String password;
	private String fName;
	private String lName;
	private String contactNo;
	private String role;
	private String status;
	private int capacity;
	private String danceStyle;
	private String timePref;
	private String place;

	public Choreographer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Choreographer(int choreographerId, String userName, String password, String fName, String lName,
			String contactNo, String role, String status, int capacity, String danceStyle, String timePref,
			String place) {
		super();
		this.choreographerId = choreographerId;
		this.userName = userName;
		this.password = password;
		this.fName = fName;
		this.lName = lName;
		this.contactNo = contactNo;
		this.role = role;
		this.status = status;
		this.capacity = capacity;
		this.danceStyle = danceStyle;
		this.timePref = timePref;
		this.place = place;
	}

	public int getChoreographerId() {
		return choreographerId;
	}

	public void setChoreographerId(int choreographerId) {
		this.choreographerId = choreographerId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public String getdanceStyle() {
		return danceStyle;
	}

	public void setdanceStyle(String danceStyle) {
		this.danceStyle = danceStyle;
	}

	public String getTimePref() {
		return timePref;
	}

	public void setTimePref(String timePref) {
		this.timePref = timePref;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

}
