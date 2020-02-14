package com.cg.dnc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.cg.dnc.entity.AES;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.entity.Student;
import com.cg.dnc.exception.UserNotFoundException;

@Repository
public class StudentDaoImpl implements IStudentDao {
	
	final String secretKey = "ssshhhhhhhhhhh!!!!";

	@PersistenceContext
	EntityManager mgr;

	@Override
	public Student verifyStudent(Login login) throws UserNotFoundException{

		Student student;
		 
		 
		try {

			student = mgr.createNamedQuery("byStudentUserName", Student.class)
					.setParameter("userName", login.getUserName()).getSingleResult();
			System.out.println("Student UserName" + student.getUserName());
			if (AES.decrypt(student.getPassword(), secretKey).equals(login.getPassword())) {
				System.out.println("Student userId::" + student.getStudentId());
				System.out.println("Student Password::" + AES.decrypt(student.getPassword(), secretKey));
				return student;
			}

		} catch (Exception e) {
			
			System.out.println(e.getMessage());
			throw new UserNotFoundException("Wrong user Id provided");
		}

		return student;
	}

	@Override
	public Student regStudent(Student student) {
		student.setPassword(AES.encrypt(student.getPassword(), secretKey));
		System.out.println("Student UserName" + student.getUserName());
		System.out.println("Student Password::" + AES.decrypt(student.getPassword(), secretKey));
		student.setRole("Student");
		student.setStatus("Registered");
		mgr.persist(student);
		return student;
	}

	@Override
	public Student findStudentById(int studentId) {

		return mgr.createNamedQuery("getByStudentId", Student.class).setParameter("studentId", studentId)
				.getSingleResult();
	}

	@Override
	public List<Student> getAllStudents() {
		
		return mgr.createNamedQuery("getAllStudent").getResultList();
	}

	@Override
	public List<DanceDetails> getEventByStudentId(int studentId) {
		
		return mgr.createNamedQuery("getEventsByStudentId", DanceDetails.class).setParameter("studentId", studentId).getResultList();
	}

	@Override
	public DanceDetails addDance(DanceDetails dance) {
		dance.setDanceCost("5000");
		mgr.persist(dance);
		return dance;
	}

}
