package com.cg.dnc.service;

import java.util.List;

import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.exception.UserNotFoundException;

public interface IChoreographerService {

	Choreographer verifyChoreographer(Login login) throws UserNotFoundException;

	Choreographer regChoreographer(Choreographer choreographer);
	
	Choreographer findChoreographerById(int choreographerId);
	
	Choreographer findChoreographerByName(String fName, String lName);
	
	List<Choreographer> findChoreographerByDanceStyle(String danceStyle);
	
	List<Choreographer> findChoreographerList(DanceDetails dance);
	
	List<Choreographer> getAllChoreographer();
	
	List<DanceDetails> getDanceDetails(int choreographerId);
	


}
