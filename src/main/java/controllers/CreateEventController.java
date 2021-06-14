package controllers;

import javax.servlet.http.HttpServletRequest;
import java.util.Random;
import java.sql.*;

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

            Object[] evento = { idEvento, idCalendario, request.getParameter("titulo"),
                    Date.valueOf(request.getParameter("fecha")), request.getParameter("descripcion"),
                    request.getParameter("imagen"), Time.valueOf(request.getParameter("hora") + ":00") };

            if (db.dbInsertQuery(propsR.getValue("insertEvents"), evento) == 0) {
                return "{\"message\": \"Evento no creado\", \"status\": " + 500 + "}";
            } else {
                return "{\"message\": \"Evento creado\", \"status\": " + 200 + ", \"idEvento\": " + idEvento
                        + ", \"idCalendario\": " + idCalendario + ", \"titulo\": \"" + request.getParameter("titulo")
                        + "\", \"fecha\": \"" + request.getParameter("fecha") + "\", \"descripcion\": \"" + request.getParameter("descripcion")
                        + "\", \"imagen\": \"" + request.getParameter("imagen") + "\", \"hora\": \"" + request.getParameter("hora") + "\"}";
            }
        } catch (Exception e) {
            // TODO: handle exception
            return "";
        }
    }

}
