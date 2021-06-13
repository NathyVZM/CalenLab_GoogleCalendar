package helpers;

public class Prueba_Main {

    public static void main(String[] args) {
        PropertiesReader propsR = PropertiesReader.getInstances();

        /*System.out.println(propsR.getValue("myDriver"));
        System.out.println(propsR.getValue("myUrlDB"));
        System.out.println(propsR.getValue("myUserDB"));
        System.out.println(propsR.getValue("myPassDB"));

        System.out.println(Hashing.getHash("NathyVZM15&"));*/

        Object[] usuario = {"Nathalie", "Zambrano", "nathalievzm@hotmail.com", "nathyvzm", null, "NathyVZM"};
        Object[] calendario = {1234, "URU", "Calendario de Tareas", "#00000"};

        DB db = DB.getInstances();
        //System.out.println(propsR.getValue("updateUsers"));
        //db.dbInsertQuery(propsR.getValue("insertCalendars"), calendario);
        db.dbUpdateQuery(propsR.getValue("updateUsers"), usuario);

    }
    
}
