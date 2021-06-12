package controllers;

import helpers.DB;
import helpers.PropertiesReader;

public class RegisterController {
	
	//private static DB db = DB.getInstances();
	//private static PropertiesReader propsR = PropertiesReader.getInstances();
	
	static public String register(String name, String email, String password) {
		System.out.println(name + "\t" + email + "\t" + password);
		
		//Object[] user = {name, email, password};
		try {
			//db.dbInsertQuery(propsR.getValue("insertUsers"), user);
			//db.dbClose();
			return "{\"name\": \"" + name + "\", \"email\": \"" + email + "\", \"password\": \"" + password + "\"}";
		} catch (Exception e) {
			// TODO: handle exception
			return "{\"message\": \"user already exist\", \"status\": " + 503 + "}";
		}
	}

}
