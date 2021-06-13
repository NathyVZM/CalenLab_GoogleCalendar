package controllers;

import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class CreateCalendarController {

    private CreateCalendarController(){}

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String createCalendar(HttpServletRequest request){
        int idCalendario = ThreadLocalRandom.current().nextInt();

        Object[] calendario = {idCalendario, request.getParameter("titulo"), 
        request.getParameter("descripcion"), request.getParameter("color")};

        String nomUsuario = (String) request.getAttribute("nomUsuario");
        Object[] permisos = {nomUsuario, idCalendario, "propietario"};
        
        try {
            if (db.dbInsertQuery(propsR.getValue("insertCalendars"), calendario) == 0
            && db.dbInsertQuery(propsR.getValue("insertPermisos"), permisos) == 0) {
                return "{\"message\": \"Error al crear Calendario\", \"status\": " + 500 + "}";
            } else {
                return "{\"message\": \"Calendario Creado\", \"status\": " + 200 + "}";
            }
        } catch (Exception e) {
            //TODO: handle exception
        }
        return "";
    }
    
}
