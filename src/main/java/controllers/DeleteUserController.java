package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.PropertiesReader;

public class DeleteUserController {

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private DeleteUserController() {
    }

    public static String eliminarUsuario(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");

            db.dbDeleteQuery(propsR.getValue("deleteUsers"), nomUsuario);
            return "{\"message\": \"Usuario Eliminado\", \"status\": " + 200 + ", \"nomUsuario\": " + nomUsuario + "}";

        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

}
