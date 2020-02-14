package com.cg.dnc.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Student;
import com.cg.dnc.service.IAdminService;

@Transactional
@RestController
@RequestMapping(value = "/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	private IAdminService service;
	
	@PostMapping(value = "/addStudent/{studentId}", produces = "application/json")
	public Student addStudent(@PathVariable int studentId) {
		return service.addStudent(studentId);
	}
	
	@PostMapping(value = "/addChoreographer/{choreographerId}", produces = "application/json")
	public Choreographer addChoreographer(@PathVariable int choreographerId) {
		return service.addChoreographer(choreographerId);		
	}
	
	@GetMapping(value = "/getAllEvents", produces = "application/json")
	public List<DanceDetails> getAllEvents(){
		return service.viewAllPrograms();
	}

}
