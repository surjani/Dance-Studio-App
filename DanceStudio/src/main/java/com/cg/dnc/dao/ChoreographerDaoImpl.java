package com.cg.dnc.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.cg.dnc.entity.AES;
import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.exception.UserNotFoundException;

@Repository
public class ChoreographerDaoImpl implements IChoreographerDao {

	final String secretKey = "ssshhhhhhhhhhh!!!!";

	@PersistenceContext
	EntityManager mgr;

	@Override
	public Choreographer verifyChoreographer(Login login) throws UserNotFoundException {

		Choreographer choreographer;

		try {
			choreographer = mgr.createNamedQuery("byChorUserName", Choreographer.class)
					.setParameter("userName", login.getUserName()).getSingleResult();
			System.out.println("Choreographer mail::" + choreographer.getUserName());
			if (AES.decrypt(choreographer.getPassword(), secretKey).equals(login.getPassword())) {
				System.out.println("Choreographer Id::" + choreographer.getChoreographerId());
				System.out.println("Choreographer Password::" + AES.decrypt(choreographer.getPassword(), secretKey));
				return choreographer;
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new UserNotFoundException("Wrong UserName Provided");
		}

		return choreographer;
	}

	@Override
	public Choreographer regChoreographer(Choreographer choreographer) {
		choreographer.setPassword(AES.encrypt(choreographer.getPassword(), secretKey));
		System.out.println("Choreographer mail::" + choreographer.getUserName());
		System.out.println("Choreographer Password::" + AES.decrypt(choreographer.getPassword(), secretKey));
		choreographer.setRole("Choreographer");
		choreographer.setStatus("Registered");
		choreographer.setCapacity(2);
		mgr.persist(choreographer);
		return choreographer;
	}

	@Override
	public Choreographer findChoreographerById(int choreographerId) {

		Choreographer choreographer = mgr.createNamedQuery("getByChoreographerId", Choreographer.class)
				.setParameter("choreographerId", choreographerId).getSingleResult();

		return choreographer;

	}

	@Override
	public List<Choreographer> findChoreographerList(DanceDetails dance) {

		List<Choreographer> choreographerList = new ArrayList<Choreographer>();
		choreographerList = mgr.createNamedQuery("findChoreographer", Choreographer.class)
				.setParameter("danceStyle", dance.getDanceStyle()).setParameter("place", dance.getPlace())
				.setParameter("timePref", dance.getTimePref()).getResultList();
		System.out.println(choreographerList.size());

		// Choreographer choreographer = choreographerList.get(0);

		// dance.setChoreographer(choreographer);

		// dance.setDanceCost("5000");

//		Student student = mgr.createNamedQuery("getByStudentId", Student.class)
//				.setParameter("studentId", dance.getStudent()).getSingleResult();
//		dance.setStudent(student);

//		mgr.persist(dance);
//		System.out.println("chId" +dance.getChoreographer().getChoreographerId());

		return choreographerList;
	}

	@Override
	public List<Choreographer> getAllChoreographer() {

		return mgr.createNamedQuery("getAllChoreographer").getResultList();
	}

	@Override
	public List<DanceDetails> getDanceDetails(int choreographerId) {

		return mgr.createNamedQuery("getEventsByChoreographerId", DanceDetails.class)
				.setParameter("choreographerId", choreographerId).getResultList();
	}

	@Override
	public Choreographer findChoreographerByName(String fName, String lName) {

		return mgr.createNamedQuery("getChoreographerByName", Choreographer.class).setParameter("fName", fName)
				.setParameter("lName", lName).getSingleResult();
	}

	@Override
	public List<Choreographer> findChoreographerByDanceStyle(String danceStyle) {

		return mgr.createNamedQuery("getChoreographerByDanceStyle", Choreographer.class)
				.setParameter("danceStyle", danceStyle).getResultList();
	}

}
