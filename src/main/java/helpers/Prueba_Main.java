package helpers;

public class Prueba_Main {

    public static void main(String[] args) {
        PropertiesReader propsR = PropertiesReader.getInstances();

        System.out.println(propsR.getValue("myDriver"));
        System.out.println(propsR.getValue("myUrlDB"));
        System.out.println(propsR.getValue("myUserDB"));
        System.out.println(propsR.getValue("myPassDB"));

        System.out.println(Hashing.getHash("NathyVZM15&"));

        DB.getInstances();
    }
    
}
