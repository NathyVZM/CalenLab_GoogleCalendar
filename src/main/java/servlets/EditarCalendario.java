package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.EditCalendarController;

@MultipartConfig()
@WebServlet("/EditarCalendario")

public class EditarCalendario extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public EditarCalendario(){
        super();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(EditCalendarController.getIDCalendario(req));
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(EditCalendarController.editarCalendario(req));
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(EditCalendarController.retornarIDCalendario(req));
    }
    
}
