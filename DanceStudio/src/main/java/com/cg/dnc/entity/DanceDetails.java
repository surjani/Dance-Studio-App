package com.cg.dnc.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

@Entity
@NamedQuery(name = "getAllEvents", query = "FROM DanceDetails")
@NamedQuery(name = "getEventsByStudentId", query = "FROM DanceDetails WHERE student.studentId=:studentId")
@NamedQuery(name = "getEventsByChoreographerId", query = "FROM DanceDetails WHERE choreographer.choreographerId=:choreographerId")
public class DanceDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int danceId;
	private String danceStyle;
	private String danceCost;
	private String timePref;
	private String place;
	
	@OneToOne
	@JoinColumn(name = "studentId")
	private Student student;
	
	@OneToOne
	@JoinColumn(name = "choreographerId")
	private Choreographer choreographer;
	
	

	public DanceDetails() {
		
		// TODO Auto-generated constructor stub
	}


//
//	public DanceDetails(int danceId, String danceStyle, String danceCost, String timePref, String place,
//			Student student, Choreographer choreographer) {
//		super();
//		this.danceId = danceId;
//		this.danceStyle = danceStyle;
//		this.danceCost = danceCost;
//		this.timePref = timePref;
//		this.place = place;
//		this.student = student;
//		this.choreographer = choreographer;
//	}



	public int getDanceId() {
		return danceId;
	}



	public void setDanceId(int danceId) {
		this.danceId = danceId;
	}



	public String getDanceStyle() {
		return danceStyle;
	}



	public void setDanceStyle(String danceStyle) {
		this.danceStyle = danceStyle;
	}



	public String getDanceCost() {
		return danceCost;
	}



	public void setDanceCost(String danceCost) {
		this.danceCost = danceCost;
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



	public Student getStudent() {
		return student;
	}



	public void setStudent(Student student) {
		this.student = student;
	}



	public Choreographer getChoreographer() {
		return choreographer;
	}



	public void setChoreographer(Choreographer choreographer) {
		this.choreographer = choreographer;
	}

	

}
