package com.cg.dnc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Student;

@Repository
public class AdminDaoImpl implements IAdminDao {

	@PersistenceContext
	EntityManager mgr;

	@Autowired
	private IChoreographerDao chdao;

	@Autowired
	private IStudentDao stdao;

	@Override
	public Choreographer addChoreographer(int choreographerId) {
		Choreographer choreographer = chdao.findChoreographerById(choreographerId);
		System.out.println("statusch1" + choreographer.getStatus());
		if (choreographer.getStatus().equals("Registered")) {
			choreographer.setStatus("Approved");
			mgr.merge(choreographer);
			System.out.println("statusch2" + choreographer.getStatus());
		}
		return choreographer;
	}

	@Override
	public Student addStudent(int studentId) {
		Student student = stdao.findStudentById(studentId);
		// String status = student.getStatus();
		System.out.println("status1" + student.getStatus());
		if (student.getStatus().equals("Registered")) {
			student.setStatus("Approved");
			mgr.merge(student);
			System.out.println("status2" + student.getStatus());
		}

		return student;
	}

	@Override
	public List<DanceDetails> viewAllPrograms() {

		return mgr.createNamedQuery("getAllEvents", DanceDetails.class).getResultList();
	}

}
