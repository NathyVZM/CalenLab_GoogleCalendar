package controllers;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class DeleteCalendarController {
    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private DeleteCalendarController() {
    }

    public static String eliminarCalendario(HttpServletRequest request) {
        try {
            int idCalendario = Integer.parseInt(request.getParameter("idCalendario"));
            db.dbDeleteQuery(propsR.getValue("deleteCalendars"), idCalendario);

            return "{\"message\": \"Calendario Eliminado\", \"idCalendario\": \"" + request.getParameter("idCalendario")
                    + "\", \"status\": " + 200 + "}";
        } catch (Exception e) {
            // TODO: handle exception
            return "{\"message\": \"Error al borrar calendario\", \"status\": " + 500 + "}";
        }
    }

}
