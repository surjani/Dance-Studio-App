package com.cg.dnc.web;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.cg.dnc.exception.UserNotFoundException;



@Order(Ordered.HIGHEST_PRECEDENCE)
@ControllerAdvice
@RestController
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(UserNotFoundException.class)
	@ResponseBody
	public ResponseEntity<Object> handleInvalidUser( UserNotFoundException user) {

		System.out.println("Exception: " + user.getMessage());

		return new ResponseEntity<>(user.getMessage(), HttpStatus.NOT_FOUND);

	}

}
