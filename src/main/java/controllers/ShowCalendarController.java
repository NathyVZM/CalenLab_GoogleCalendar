package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.PropertiesReader;

public class ShowCalendarController {

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String mostrarCalendarios(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");
            Object[] calendarios = db.dbSelectCalendar(propsR.getValue("selectIDCalendars"), nomUsuario);
            return "{\"message\": \"Calendarios obtenidos\", \"status\": " + 200 + ", \"idCalendario\": [" + calendarios + "]}";
        } catch (Exception e) {
            //TODO: handle exception
            return "";
        }
    }
    
}
