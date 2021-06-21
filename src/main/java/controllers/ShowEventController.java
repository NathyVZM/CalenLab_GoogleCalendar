package controllers;

import javax.servlet.http.HttpServletRequest;

import helpers.DB;
import helpers.PropertiesReader;

public class ShowEventController {
    private static PropertiesReader propsR = PropertiesReader.getInstances();
    private static DB db = DB.getInstances();

    private ShowEventController() {
    }

    public static String mostrarEvento(HttpServletRequest request) {
        try {
            int idCalendario = Integer.parseInt(request.getParameter("idCalendario"));

            Object[] idEvento = db.dbSelectCalendar(propsR.getValue("selectIDEvents"), idCalendario);
            Object[] idCalendarioEvento = db.dbSelectCalendar(propsR.getValue("selectIDCalendarsEvents"), idCalendario);
            Object[] titulo = db.dbSelectCalendar(propsR.getValue("selectTitleEvents"), idCalendario);
            Object[] fecha = db.dbSelectCalendar(propsR.getValue("selectDateEvents"), idCalendario);
            Object[] descripcion = db.dbSelectCalendar(propsR.getValue("selectDescriptionEvents"), idCalendario);
            Object[] imagen = db.dbSelectCalendar(propsR.getValue("selectImageEvents"), idCalendario);
            Object[] hora = db.dbSelectCalendar(propsR.getValue("selectTimeEvents"), idCalendario);

            StringBuilder retorno = new StringBuilder();
            retorno.append("{\"message\": \"Eventos obtenidos\", \"status\": " + 200 + ", \"idEvento\": [");

            for(int i = 0; i < idEvento.length; i++){
                retorno.append("\"" + idEvento[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"idCalendario\": [");

            for(int i = 0; i < idCalendarioEvento.length; i++){
                retorno.append("\"" + idCalendarioEvento[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"titulo\": [");

            for(int i = 0; i < titulo.length; i++){
                retorno.append("\"" + titulo[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"fecha\": [");

            for(int i = 0; i < fecha.length; i++){
                retorno.append("\"" + fecha[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"descripcion\": [");

            for(int i = 0; i < descripcion.length; i++){
                retorno.append("\"" + descripcion[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"imagen\": [");

            for(int i = 0; i < imagen.length; i++){
                retorno.append("\"" + imagen[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("], \"hora\": [");

            for(int i = 0; i < hora.length; i++){
                retorno.append("\"" + hora[i].toString() + "\",");
            }
            retorno = retorno.deleteCharAt(retorno.length() -1);
            retorno.append("]}");
            

            return retorno.toString();
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            return "{\"message\": \"Error al obtener eventos\", \"status\": " + 500 + "}";
        }
    }

}