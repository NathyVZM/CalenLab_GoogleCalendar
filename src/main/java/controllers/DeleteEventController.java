package controllers;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class DeleteEventController {

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private DeleteEventController(){}

    public static String eliminarEvento(HttpServletRequest request){
        try {

            int idEvento = Integer.parseInt(request.getParameter("idEvento"));
            db.dbDeleteQuery(propsR.getValue("deleteEvents"), idEvento);

            return "{\"message\": \"Evento Eliminado\", \"status\": " + 200 + ", \"idEvento\": " + idEvento + "}";
            
        } catch (Exception e) {
            //TODO: handle exception
            return "{\"message\": \"Error al eliminar Evento\", \"status\": " + 500 + "}";
        }
    }
    
}
