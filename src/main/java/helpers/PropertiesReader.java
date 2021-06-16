package helpers;

import java.io.*;
import java.util.*;

public class PropertiesReader {

    //ATTRIBUTES
	private static PropertiesReader propsR = new PropertiesReader();
	private FileInputStream fis;
	private Properties props;
	
	//CONSTRUCTOR
	public PropertiesReader() {
		try {
			// LOCALIZANDO ARCHIVO PROPERTIES
			fis = new FileInputStream("src/main/java/helpers/herokuProperties.properties");

			// CREANDO OBJETO PROPERTIES Y CARGANDO LA DATA
			props = new Properties();
			props.load(fis);

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	//STATIC METHOD - getInstances()
	public static PropertiesReader getInstances() {
		return propsR;
	}
	
	//METHOD - getValue()
	public String getValue(String value) {
		return props.getProperty(value);
	}
    
}

