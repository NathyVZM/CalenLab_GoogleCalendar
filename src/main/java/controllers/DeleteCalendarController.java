package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.PropertiesReader;

public class DeleteCalendarController {
    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private DeleteCalendarController() {
    }

    public static String eliminarCalendario(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");

            int idCalendario = Integer.parseInt(request.getParameter("idCalendario"));

            db.dbDeleteQuery(propsR.getValue("deleteCalendars"), idCalendario);

            return "{\"message\": \"Calendario Eliminado\", \"idCalendario\": \"" + request.getParameter("idCalendario")
                    + "\", \"status\": " + 200 + "}";
        } catch (Exception e) {
            // TODO: handle exception
        }
        return "";
    }

}
