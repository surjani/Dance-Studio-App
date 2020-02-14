package com.cg.dnc.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.entity.Student;
import com.cg.dnc.exception.UserNotFoundException;
import com.cg.dnc.service.IStudentService;


@Transactional
@RestController
@RequestMapping(value = "/student")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

	@Autowired
	private IStudentService service;
	
	
    //	path:: http://localhost:8902/student/loginStudent
	@PostMapping(value = "/loginStudent",consumes = "application/json", produces = "application/json")
	public Student verifyStudent(@RequestBody Login login) throws UserNotFoundException {
		
		return service.verifyStudent(login);
		
	}
	
    //	path :: http://localhost:8902/student/regStudent
	@PostMapping(value = "/regStudent", consumes = "application/json", produces = "application/json")
	public Student registerStudent(@RequestBody Student student) {
		return service.regStudent(student);
	}
	
	
    //	path:: http://localhost:8902/student/StudentID/2
	@GetMapping(value = "/StudentID/{studentId}", produces = "application/json")
	public Student findStudentById(@PathVariable int studentId) {
		return service.findStudentById(studentId);
	}
	
	@GetMapping(value = "/getAllStudents",produces = "application/json")
	public List<Student> getAllStudents(){
		return service.getAllStudents();
		
	}
	
	@GetMapping(value = "/eventsByStudentId/{studentId}", produces = "application/json")
	public List<DanceDetails> getEventByStudentId(@PathVariable int studentId) {
		return service.getEventByStudentId(studentId);
	}
	
	@PostMapping(value = "/addDance", consumes = "application/json",produces = "application/json")
	public DanceDetails addDance(@RequestBody DanceDetails dance) {
		System.out.println("Dance :" +dance.getDanceStyle());
		return service.addDance(dance);
	}
	
}
