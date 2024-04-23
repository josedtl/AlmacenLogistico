package Models.Servicio;

import java.sql.Timestamp;
import com.fasterxml.jackson.annotation.JsonProperty;

import EntityLayer.ServicioEntity;
import Enumerados.ProcessActionEnum;

public class ServicioSaveModel {
 
   
   
    public ServicioSaveModel() {
        this.servicioId = 0;
        this.correlativo = "";
        this.nombre = "";
        this.descripcion = "";
        this.tipoServicioId= 0;
        this.fechaRegistro = null;
        this.codUsuario = "";
        this.estadoRegistro = false;
    }

    public ServicioSaveModel(ServicioEntity Ent) {
        this.servicioId = Ent.getServicioId();
        this.correlativo = Ent.getCorrelativo();
        this.nombre = Ent.getNombre();
        this.descripcion = Ent.getDescripcion();
        this.tipoServicioId= Ent.getTipoServicioId();
        this.fechaRegistro = Ent.getFechaRegistro();
        this.codUsuario = Ent.getCodUsuario();
        this.estadoRegistro = Ent.getEstadoRegistro();
    }

   
    @JsonProperty("ServicioId")
    private int servicioId = 0;

    public int getServicioId() {
        return servicioId;
    }

    public void setServicioId(int servicioId) {
        this.servicioId = servicioId;
    }

    @JsonProperty("Correlativo")
    private String correlativo = "";

    public String getCorrelativo() {
        return correlativo;
    }

    public void setCorrelativo(String correlativo) {
        this.correlativo = correlativo;
    }

    @JsonProperty("Nombre")
    private String nombre = "";

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @JsonProperty("Descripcion")
    private String descripcion = "";

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @JsonProperty("TipoServicioId")
    private int tipoServicioId = 0;

    public int getTipoServicioId() {
        return tipoServicioId;
    }

    public void setTipoServicioId(int tipoServicioId) {
        this.tipoServicioId = tipoServicioId;
    }

    @JsonProperty("FechaRegistro")
    private Timestamp fechaRegistro = null;

    public Timestamp getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Timestamp fechaRegistro) {
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
