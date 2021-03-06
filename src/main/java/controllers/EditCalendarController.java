package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.Calendario;
import helpers.DB;
import helpers.PropertiesReader;

public class EditCalendarController {

    private static Calendario calendario = Calendario.getInstances();
    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private EditCalendarController(){}

    public static String getIDCalendario(HttpServletRequest request) {
        try {
            String idCalendario = request.getParameter("idCalendario");
            calendario.setIdCalendario(idCalendario);

            return "{\"message\": \"IDCalendario obtenido\", \"status\": " + 200 + ", \"idCalendario\": \""
                    + idCalendario + "\"}";
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

    public static String retornarIDCalendario(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");

            return "{\"message\": \"IDCalendario obtenido\", \"status\": " + 200 + ", \"idCalendario\": \""
                    + calendario.getIdCalendario() + "\", \"nomUsuario\": \"" + nomUsuario + "\"}";
        } catch (Exception e) {
            // TODO: handle exception
            return "{\"message\": \"Error al obtener ID\", \"status\": " + 500 + "}";
        }
    }

    public static String editarCalendario(HttpServletRequest request) {
        try {
            int idCalendario = Integer.parseInt(request.getParameter("idCalendario"));
            Object[] calendario = { idCalendario, request.getParameter("titulo"), request.getParameter("descripcion"),
                    request.getParameter("color"), idCalendario };

            db.dbUpdateQuery(propsR.getValue("updateCalendars"), calendario);

            return "{\"message\": \"Calendario Editado\", \"status\": " + 200 + ", \"titulo\": \""
                    + request.getParameter("titulo") + "\", \"idCalendario\": " + idCalendario + "}";
        } catch (Exception e) {
            // TODO: handle exception
            return "{\"message\": \"Error al editar\", \"status\": " + 500 + "}";
        }
    }

}
