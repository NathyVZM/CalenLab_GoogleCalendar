package controllers;

import javax.servlet.http.HttpServletRequest;
import java.util.Random;

import helpers.DB;
import helpers.PropertiesReader;

public class CreateEventController {

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String crearEvento(HttpServletRequest request) {
        try {
            Random rand = new Random();
            int idEvento = rand.nextInt(10000000) + 1;

            int idCalendario = Integer.parseInt(request.getParameter("calendario-evento"));

            Object[] evento = { idEvento, idCalendario, request.getParameter("titulo"), request.getParameter("fecha"),
                    request.getParameter("descripcion"), request.getParameter("imagen"), request.getParameter("hora") };

            //db.dbInsertQuery(propsR.getValue("insertEvents"), evento);
            return "";
        } catch (Exception e) {
            // TODO: handle exception
            return "";
        }
    }

}
