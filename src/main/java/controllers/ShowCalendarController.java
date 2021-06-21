package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import helpers.DB;
import helpers.PropertiesReader;

public class ShowCalendarController {

    private ShowCalendarController(){}

    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    public static String mostrarCalendarios(HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            String nomUsuario = (String) session.getAttribute("usuario");
            Object[] idcalendarios = db.dbSelectCalendar(propsR.getValue("selectIDCalendars"), nomUsuario);
            Object[] titulos = db.dbSelectCalendar(propsR.getValue("selectTitleCalendars"), nomUsuario);
            Object[] colores = db.dbSelectCalendar(propsR.getValue("selectColorCalendars"), nomUsuario);
            
            StringBuilder retorno = new StringBuilder();
            retorno.append("{\"message\": \"Calendarios obtenidos\", \"status\":" + 200 + ", \"nomUsuario\": \"" + nomUsuario + "\", \"idCalendario\": [");
            for(int i = 0; i < idcalendarios.length; i++){
                retorno.append("\"" + idcalendarios[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"titulo\": [");

            for(int i = 0; i < titulos.length; i++){
                retorno.append("\"" + titulos[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() - 1);
            retorno.append("], \"color\": [");

            for(int i = 0; i < colores.length; i++){
                retorno.append("\"" + colores[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() - 1);
            retorno.append("]}");
            
            return retorno.toString();
        } catch (Exception e) {
            //TODO: handle exception
            return "{\"message\": \"Error al obtener calendarios\", \"status\": " + 500 + "}";
        }
    }
    
}
