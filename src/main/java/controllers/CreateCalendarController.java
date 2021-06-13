package controllers;

import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.PropertiesReader;

public class CreateCalendarController {

    private CreateCalendarController() {
    }

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String createCalendar(HttpServletRequest request) {
        Random rand = new Random();
        int idCalendario = rand.nextInt(10000000) + 1;

        Object[] calendario = { idCalendario, request.getParameter("titulo"), request.getParameter("descripcion"),
                request.getParameter("color") };

        HttpSession session = request.getSession();
        String nomUsuario = (String) session.getAttribute("usuario");
        Object[] permisos = { "propietario", nomUsuario, idCalendario };

        try {
            if (db.dbInsertQuery(propsR.getValue("insertCalendars"), calendario) == 0) {
                return "{\"message\": \"Error al crear Calendario\", \"status\": " + 500 + "}";
            } else {
                db.dbInsertQuery(propsR.getValue("insertPermisos"), permisos);
                return "{\"message\": \"Calendario Creado\", \"status\": " + 200 + ", \"idCalendario\": " + idCalendario
                        + ", \"titulo\": \"" + request.getParameter("titulo") + "\", \"nomUsuario\": \"" + nomUsuario + "\"}";
            }
        } catch (Exception e) {
            // TODO: handle exception
        }
        return "";
    }

}
