package com.cg.dnc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.dnc.dao.IChoreographerDao;
import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.exception.UserNotFoundException;

@Service
@Transactional
public class ChoreographerServiceImpl implements IChoreographerService {

	@Autowired
	private IChoreographerDao dao;

	@Override
	public Choreographer verifyChoreographer(Login login) throws UserNotFoundException {

		return dao.verifyChoreographer(login);
	}

	@Override
	public Choreographer regChoreographer(Choreographer choreographer) {

		return dao.regChoreographer(choreographer);
	}

	@Override
	public Choreographer findChoreographerById(int choreographerId) {

		return dao.findChoreographerById(choreographerId);
	}

	@Override
	public List<Choreographer> findChoreographerList(DanceDetails dance) {

		return dao.findChoreographerList(dance);
	}

	@Override
	public List<Choreographer> getAllChoreographer() {
		
		return dao.getAllChoreographer();
	}

	@Override
	public List<DanceDetails> getDanceDetails(int choreographerId) {
		
		return dao.getDanceDetails(choreographerId);
	}

	@Override
	public Choreographer findChoreographerByName(String fName, String lName) {
	
		return dao.findChoreographerByName(fName, lName);
	}

	@Override
	public List<Choreographer> findChoreographerByDanceStyle(String danceStyle) {
		
		return dao.findChoreographerByDanceStyle(danceStyle);
	}

}
