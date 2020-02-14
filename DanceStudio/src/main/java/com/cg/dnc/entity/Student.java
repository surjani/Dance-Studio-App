package com.cg.dnc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "byStudentUserName", query = "FROM Student WHERE userName=:userName")
@NamedQuery(name = "getByStudentId", query = "FROM Student WHERE studentId=:studentId")
@NamedQuery(name = "getAllStudent", query = "FROM Student")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "studentId")
	private int studentId;
	private String fName;
	private String lName;
	@Column(length = 50, unique = true)
	private String userName;
	@Column(length = 50)
	private String password;
	@Column(length = 50)
	private String contactNo;
	private String role;
	private String status;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int studentId, String fName, String lName, String userName, String password, String contactNo,
			String role, String status) {
		super();
		this.studentId = studentId;
		this.fName = fName;
		this.lName = lName;
		this.userName = userName;
		this.password = password;
		this.contactNo = contactNo;
		this.role = role;
		this.status = status;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
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

}
