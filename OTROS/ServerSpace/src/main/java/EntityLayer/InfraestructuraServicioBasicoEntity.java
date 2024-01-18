package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class InfraestructuraServicioBasicoEntity {

    @JsonProperty("InfraestructuraServicioBasicoId")
    private int infraestructuraServicioBasicoId = 0;
    public int getInfraestructuraServicioBasicoId() {
        return infraestructuraServicioBasicoId;
    }

    public void setInfraestructuraServicioBasicoId(int infraestructuraServicioBasicoId) {
        this.infraestructuraServicioBasicoId = infraestructuraServicioBasicoId;
    }

    @JsonProperty("InfraestructuraId")
    private int infraestructuraId = 0;
    public int getInfraestructuraId() {
        return infraestructuraId;
    }

    public void setInfraestructuraId(int infraestructuraId) {
        this.infraestructuraId = infraestructuraId;
    }

    @JsonProperty("ServicioBasicoId")
    private int servicioBasicoId = 0;
    public int getServicioBasicoId() {
        return servicioBasicoId;
    }

    public void setServicioBasicoId(int servicioBasicoId) {
        this.servicioBasicoId = servicioBasicoId;
    }

    @JsonProperty("PagoExonerado")
    private boolean pagoExonerado = false;
    public boolean getPagoExonerado() {
        return pagoExonerado;
    }

    public void setPagoExonerado(boolean pagoExonerado) {
        this.pagoExonerado = pagoExonerado;
    }

    @JsonProperty("FechaRegistro")
    private Date fechaRegistro = null;
    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    @JsonProperty("CodUsuario")
    private String codUsuario = "";
    public String getCodUsuario() {
        return codUsuario;
    }

    public void setCodUsuario(String codUsuario) {
        this.codUsuario = codUsuario;
    }

    @JsonProperty("EstadoRegistro")
    private boolean estadoRegistro = false;
    public boolean getEstadoRegistro() {
        return estadoRegistro;
    }

    public void setEstadoRegistro(boolean estadoRegistro) {
        this.estadoRegistro = estadoRegistro;
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
