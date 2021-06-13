package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.DeleteCalendarController;

@MultipartConfig()
@WebServlet("/EliminarCalendario")

public class EliminarCalendario extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public EliminarCalendario(){
        super();
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        //out.println("{\"message\": \"idCalendario Recibido\", \"idCalendario\": " + req.getParameter("idCalendario") + "}");
        out.println(DeleteCalendarController.eliminarCalendario(req));
    }
    
}
