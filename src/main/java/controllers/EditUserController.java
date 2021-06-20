package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.Hashing;
import helpers.PropertiesReader;

public class EditUserController {

    private EditUserController() {
    }

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String retornarUsuario(HttpServletRequest request){
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");

            return "{\"message\": \"Usuario retornado\", \"status\": " + 200 + "\"nomUsuario\": \"" + nomUsuario + "\"}";
        } catch (Exception e) {
            //TODO: handle exception
            return null;
        }
    }

    public static String editarUsuario(HttpServletRequest request) {
        try {
            String hashPassword = Hashing.getHash(request.getParameter("password"));
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");

            Object[] usuario = { request.getParameter("name"), request.getParameter("lastName"),
                    request.getParameter("userName"), hashPassword, null, nomUsuario };
            db.dbUpdateQuery(propsR.getValue("updateUsers"), usuario);

            return "{\"message\": \"Usuario Editado\", \"status\": " + 200 + ", \"nomUsuario\": \"" + nomUsuario + "\"}";
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

}
