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

import com.cg.dnc.entity.Choreographer;
import com.cg.dnc.entity.DanceDetails;
import com.cg.dnc.entity.Login;
import com.cg.dnc.exception.UserNotFoundException;
import com.cg.dnc.service.IChoreographerService;

@Transactional
@RestController
@RequestMapping(value = "/choreographer")
@CrossOrigin(origins = "http://localhost:4200")
public class ChoreographerController {

	@Autowired
	private IChoreographerService service;

	// path:: http://localhost:8902/choreographer/loginChor
	@PostMapping(value = "/loginChor", produces = "application/json", consumes = "application/json")
	public Choreographer verifyChoreographer(@RequestBody Login login) throws UserNotFoundException {
		return service.verifyChoreographer(login);
	}

	// path:: http://localhost:8902/choreographer/regChor
	@PostMapping(value = "/regChor", produces = "application/json", consumes = "application/json")
	public Choreographer regChoreographer(@RequestBody Choreographer choreographer) {
		return service.regChoreographer(choreographer);
	}

	// path:: http://localhost:8902/choreographer/findChorByID/2
	@GetMapping(value = "/findChorByID/{choreographerId}", produces = "application/json")
	public Choreographer findChoreographerById(@PathVariable int choreographerId) throws UserNotFoundException {
		return service.findChoreographerById(choreographerId);
	}

	@PostMapping(value = "/choreographerList", consumes = "application/json", produces = "application/json")
	public List<Choreographer> getChoreographerList(@RequestBody DanceDetails dance) {
		return service.findChoreographerList(dance);

	}

	@GetMapping(value = "/getAllChoreographers", produces = "application/json")
	public List<Choreographer> getAllChoreographers() {
		return service.getAllChoreographer();

	}

	@GetMapping(value = "/getEventsByChoreographerId/{choreographerId}", produces = "application/json")
	public List<DanceDetails> getEventByChoreographerId(@PathVariable int choreographerId) {

		return service.getDanceDetails(choreographerId);
	}

	// path:: http://localhost:8902/choreographer/getChoreographerByName/fName/lName
	@GetMapping(value = "/getChoreographerByName/{fName}/{lName}", produces = "application/json")
	public Choreographer getChorByName(@PathVariable String fName, @PathVariable String lName) {
		return service.findChoreographerByName(fName, lName);

	}

	// path:: http://localhost:8902/choreographer/getChoreographersByDance/Salsa
	@GetMapping(value = "/getChoreographersByDance/{danceStyle}", produces = "application/json")
	public List<Choreographer> getChorByDanceStyle(@PathVariable String danceStyle) {
		return service.findChoreographerByDanceStyle(danceStyle);
	}

}
