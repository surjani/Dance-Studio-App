package com.cg.dnc.service;

import java.util.List;

import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Student;

public interface IAdminService {
	
	Choreographer addChoreographer(int choreographerId);

	Student addStudent(int studentId);

	List<DanceDetails> viewAllPrograms();

}
