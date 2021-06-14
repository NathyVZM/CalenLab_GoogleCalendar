package helpers;

import java.util.ArrayList;

public class Prueba_Main {

    public static void main(String[] args) {
        PropertiesReader propsR = PropertiesReader.getInstances();

        /*System.out.println(propsR.getValue("myDriver"));
        System.out.println(propsR.getValue("myUrlDB"));
        System.out.println(propsR.getValue("myUserDB"));
        System.out.println(propsR.getValue("myPassDB"));

        System.out.println(Hashing.getHash("NathyVZM15&"));*/

        Object[] usuario = {"Nathalie", "Zambrano", "nathalievzm@hotmail.com", "nathyvzm", null, "NathyVZM"};
        Object[] calendario = {9734897, "URU", "Calendario de Tareas", "#00000", 9734897};

        DB db = DB.getInstances();
        //System.out.println(propsR.getValue("updateUsers"));
        //db.dbInsertQuery(propsR.getValue("insertCalendars"), calendario);
        //db.dbUpdateQuery(propsR.getValue("updateCalendars"), calendario);

        Object[] arreglo = db.dbSelectCalendar(propsR.getValue("selectIDCalendars"), "NathyVZM");
        
        /*for(int i = 0; i < arreglo.size(); i++){
            System.out.println(arreglo.get(i));
        }*/

        //Object[] array = arreglo.toArray();
        for(int i = 0; i < arreglo.length; i++){
            System.out.println(arreglo[i]);
        }

    }
    
}
