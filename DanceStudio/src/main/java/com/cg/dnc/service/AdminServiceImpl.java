package com.cg.dnc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.dnc.dao.IAdminDao;
import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Student;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService{
	
	@Autowired
	private IAdminDao dao;

	@Override
	public Choreographer addChoreographer(int choreographerId) {
		
		return dao.addChoreographer(choreographerId);
	}

	@Override
	public Student addStudent(int studentId) {
	
		return dao.addStudent(studentId);
	}

	@Override
	public List<DanceDetails> viewAllPrograms() {
		
		return dao.viewAllPrograms();
	}

}
