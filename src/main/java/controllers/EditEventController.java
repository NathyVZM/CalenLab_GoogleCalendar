package controllers;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.Evento;
import helpers.PropertiesReader;

public class EditEventController {

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();
    private static Evento evento = Evento.getInstances();

    private EditEventController() {
    }

    // getIDEvento()
    public static String getIDEvento(HttpServletRequest request) {
        try {
            String idEvento = request.getParameter("idEvento");
            evento.setIdEvento(idEvento);

            return "{\"message\": \"IdEvento Obtenido\", \"status\": " + 200 + ", \"idEvento\": \"" + idEvento + "\"}";
        } catch (Exception e) {
            // TODO: handle exception
            return "{\"message\": \"Error al obtener IdEvento\", \"status\": " + 500 + "}";
        }
    }

    // retornarIDEvento()
    public static String retornarIDEvento() {
        try {
            return "{\"message\": \"IdEvento Obtenido\", \"status\": " + 200 + ", \"idEvento\": \""
                    + evento.getIdEvento() + "\"}";
        } catch (Exception e) {
            // TODO: handle exception
            return "{\"message\": \"Error al obtener IdEvento\", \"status\": " + 500 + "}";
        }
    }

    //editarEvento()
    public static String editarEvento(HttpServletRequest request){
        try {
            return "";
        } catch (Exception e) {
            //TODO: handle exception
            return "";
        }
    }

}
