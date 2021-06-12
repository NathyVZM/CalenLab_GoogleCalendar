package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.Auth;

public class LoginController {

    public static String login(HttpServletRequest request){
        try {
            if(Auth.authCheck(request.getParameter("userName"), request.getParameter("password"))){
                HttpSession session = request.getSession();
                session.setAttribute("usuario", request.getParameter("userName"));

                return "{\"message\": \"Login Exitoso\", \"user\": " + request.getParameter("userName") + ", \"status\": " + 200 + "}";
            } 
            else {
                return "{\"message\": \"Error de Credenciales\", \"status\": " + 500 + "}";
            }
        } catch (Exception e) {
            //TODO: handle exception
        }

        return null;
    }
    
}
