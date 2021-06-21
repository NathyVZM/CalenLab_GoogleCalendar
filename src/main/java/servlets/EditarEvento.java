package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.EditEventController;

@MultipartConfig()
@WebServlet("/EditarEvento")

public class EditarEvento extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public EditarEvento(){
        super();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(EditEventController.getIDEvento(req));
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(EditEventController.retornarIDEvento());
    }
    
}
