package helpers;

public class Evento {

    //ATTRIBUTES
    private String idEvento;
    private static Evento evento = new Evento();

    //CONSTRUCTOR
    public Evento(){
        this.idEvento = "";
    }

    //METHODS
    public static Evento getInstances(){
        return evento;
    }

    public String getIdEvento(){
        return this.idEvento;
    }

    public void setIdEvento(String idEvento){
        this.idEvento = idEvento;
    }
    
}
