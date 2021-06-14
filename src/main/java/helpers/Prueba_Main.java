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

        //Object[] usuario = {"Nathalie", "Zambrano", "nathalievzm@hotmail.com", "nathyvzm", null, "NathyVZM"};
        //Object[] calendario = {9734897, "URU", "Calendario de Tareas", "#00000", 9734897};

        DB db = DB.getInstances();

        /*Object[] arreglo = db.dbSelectCalendar(propsR.getValue("selectIDCalendars"), "NathyVZM");
        Object[] titulo = db.dbSelectCalendar(propsR.getValue("selectTitleCalendars"), "NathyVZM");

        for(int i = 0; i < arreglo.length; i++){
            System.out.println(arreglo[i]);
        }

        for(int i = 0; i < titulo.length; i++){
            System.out.println(titulo[i]);
        }*/

        Object[] evento = {1111, 1111, "calenlab", java.sql.Date.valueOf("2021-06-15"), "tareas de uru", null, java.sql.Time.valueOf("23:30:00")};
        db.dbInsertQuery(propsR.getValue("insertEvents"), evento);

    }
    
}
