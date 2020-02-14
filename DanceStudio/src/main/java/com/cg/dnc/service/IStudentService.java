package com.cg.dnc.service;

import java.util.List;

import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.entity.Student;
import com.cg.dnc.exception.UserNotFoundException;

public interface IStudentService {

	Student verifyStudent(Login login) throws UserNotFoundException;

	Student regStudent(Student student);

	Student findStudentById(int studentId);

	List<Student> getAllStudents();

	List<DanceDetails> getEventByStudentId(int studentId);
	
	DanceDetails addDance(DanceDetails dance);

}
