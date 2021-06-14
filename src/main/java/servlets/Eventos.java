package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.ShowEventController;

@MultipartConfig()
@WebServlet("/Eventos")

public class Eventos extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public Eventos(){
        super();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // TODO Auto-generated method stub
        resp.setContentType("application/json");
		PrintWriter out = resp.getWriter();
		out.println(ShowEventController.mostrarEvento(req));
    }
    
}
