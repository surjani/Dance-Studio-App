package com.cg.dnc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.dnc.dao.IStudentDao;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.entity.Student;
import com.cg.dnc.exception.UserNotFoundException;


@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private IStudentDao dao;

	@Override
	public Student verifyStudent(Login login) throws UserNotFoundException {
		
		return dao.verifyStudent(login);
	}

	@Override
	public Student regStudent(Student student) {
		
		return dao.regStudent(student);
	}

	@Override
	public Student findStudentById(int studentId) {
		
		return dao.findStudentById(studentId);
	}

	@Override
	public List<Student> getAllStudents() {
		
		return dao.getAllStudents();
	}

	@Override
	public List<DanceDetails> getEventByStudentId(int studentId) {
		
		return dao.getEventByStudentId(studentId);
	}

	@Override
	public DanceDetails addDance(DanceDetails dance) {
		
		return dao.addDance(dance);
	}

}
