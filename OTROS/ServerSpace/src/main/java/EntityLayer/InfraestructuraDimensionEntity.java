package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class InfraestructuraDimensionEntity {

    @JsonProperty("InfraestructuraDimensionId")
    private int infraestructuraDimensionId = 0;
    public int getInfraestructuraDimensionId() {
        return infraestructuraDimensionId;
    }

    public void setInfraestructuraDimensionId(int infraestructuraDimensionId) {
        this.infraestructuraDimensionId = infraestructuraDimensionId;
    }

    @JsonProperty("Nombre")
    private String nombre = "";
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @JsonProperty("Altura")
    private double altura=0;
    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    @JsonProperty("Largo")
    private double largo= 0; 
    public double getLargo() {
        return largo;
    }

    public void setLargo(double largo) {
        this.largo = largo;
    }

    @JsonProperty("Ancho")
    private double ancho= 0;
    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }



    @JsonProperty("Action")
    private ProcessActionEnum action = ProcessActionEnum.Loaded;

    public int getAction() {
        return action.getValor();
    }

    public void setAction(ProcessActionEnum Action) {
        this.action = Action;
    }
}
