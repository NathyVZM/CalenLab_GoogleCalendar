package controllers;

import helpers.*;

public class RegisterController {
	
	private static DB db = DB.getInstances();
	private static PropertiesReader propsR = PropertiesReader.getInstances();
	
	static public String register(String name, String lastName, String userName, String password) {
		System.out.println(name + "\t" + lastName + "\t" + userName + "\t" + password);

		String hashPassword = Hashing.getHash(password);
		
		Object[] user = {name, lastName, userName, hashPassword, null};
		try {
			if (db.dbInsertQuery(propsR.getValue("insertUsers"), user) == 0){
				return "{\"message\": \"Usuario Existente\", \"status\": " + 503 + "}";
			}
			else{
				return "{\"message\": \"Registro Exitoso\", \"status\": " + 200 + "}";
			}
		} catch (Exception e) {
			// TODO: handle exception
			return "{\"message\": \"user already exist\", \"status\": " + 503 + "}";
		}
	}

}
