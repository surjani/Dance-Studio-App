package com.cg.dnc.dao;

import java.util.List;

import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.exception.UserNotFoundException;

public interface IChoreographerDao {

	Choreographer verifyChoreographer(Login login) throws UserNotFoundException;

	Choreographer regChoreographer(Choreographer choreographer);

	Choreographer findChoreographerById(int choreographerId);
	
	Choreographer findChoreographerByName(String fName, String lName);
	
	List<Choreographer> findChoreographerByDanceStyle(String danceStyle);

	List<Choreographer> findChoreographerList(DanceDetails dance);
	
	List<DanceDetails> getDanceDetails(int choreographerId);
	
	List<Choreographer> getAllChoreographer();

}
