package helpers;

public class Calendario {
    //ATTRIBUTES
    private String idCalendario;
    private static Calendario calendario = new Calendario();

    //CONSTRUCTOR
    public Calendario(){
        this.idCalendario = "";
    }

    //METHODS
    public static Calendario getInstances(){
        return calendario;
    }
    
    public void setIdCalendario(String idCalendario) {
        this.idCalendario = idCalendario;
    }

    public String getIdCalendario(){
        return this.idCalendario;
    }
    
}
