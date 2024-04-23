package Models.Infraestructura;

import EntityLayer.InfraestructuraEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

public class InfraestructuraMainModel {

    public InfraestructuraMainModel() {
        this.infraestructuraId = 0;
        this.sucursalId = 0;
        this.codigoSistema = "";
        this.codigoInterno = "";
        this.descripcion = "";
        this.tipoInfraestructura= "";
        this.clasificacion="";
        this.infraestructuraDimension = "";
        this.aforo = 0;
        this.piso = "";
        this.fechaRegistro = null;
        this.codUsuario = "";
        this.estadoRegistro = false;
    }

    public InfraestructuraMainModel(InfraestructuraEntity Ent) {
        this.infraestructuraId = Ent.getInfraestructuraId();
        this.sucursalId = Ent.getSucursalId();
        this.codigoSistema = Ent.getCodigoSistema();
        this.codigoInterno = Ent.getCodigoInterno();
        this.descripcion = Ent.getDescripcion();
        this.tipoInfraestructura= Ent.getTipoInfraestructura();
        this.clasificacion= Ent.getClasificacion();
        this.infraestructuraDimension = Ent.getInfraestructuraDimension();
        this.aforo = Ent.getAforo();
        this.piso = Ent.getPiso();
        this.fechaRegistro = Ent.getFechaRegistro();
        this.codUsuario = Ent.getCodUsuario();
        this.estadoRegistro = Ent.getEstadoRegistro();
    }

    @JsonProperty("InfraestructuraId")
    private int infraestructuraId = 0;

    public int getInfraestructuraId() {
        return infraestructuraId;
    }

    public void setInfraestructuraId(int infraestructuraId) {
        this.infraestructuraId = infraestructuraId;
    }

    @JsonProperty("SucursalId")
    private int sucursalId = 0;

    public int getSucursalId() {
        return sucursalId;
    }

    public void setSucursalId(int sucursalId) {
        this.sucursalId = sucursalId;
    }

    @JsonProperty("CodigoSistema")
    private String codigoSistema = "";

    public String getCodigoSistema() {
        return codigoSistema;
    }

    public void setCodigoSistema(String codigoSistema) {
        this.codigoSistema = codigoSistema;
    }

    @JsonProperty("CodigoInterno")
    private String codigoInterno = "";

    public String getCodigoInterno() {
        return codigoInterno;
    }

    public void setCodigoInterno(String codigoInterno) {
        this.codigoInterno = codigoInterno;
    }

    @JsonProperty("Descripcion")
    private String descripcion = "";

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @JsonProperty("TipoInfraestructura")
    private String tipoInfraestructura = "";

    public String getTipoInfraestructura() {
        return tipoInfraestructura;
    }

    public void setTipoInfraestructura(String tipoInfraestructura) {
        this.tipoInfraestructura = tipoInfraestructura;
    }


    @JsonProperty("Clasificacion")
    private String clasificacion = "";

    public String getClasificacion() {
        return clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }


    @JsonProperty("InfraestructuraDimension")
    private String infraestructuraDimension = "";


    public String getInfraestructuraDimension() {
        return infraestructuraDimension;
    }

    public void setInfraestructuraDimension(String infraestructuraDimension) {
        this.infraestructuraDimension = infraestructuraDimension;
    }

    @JsonProperty("Aforo")
    private int aforo = 0;

    public int getAforo() {
        return aforo;
    }

    public void setAforo(int aforo) {
        this.aforo = aforo;
    }

    @JsonProperty("Piso")
    private String piso= "";

    public String getPiso() {
        return piso;
    }

    public void setPiso(String piso) {
        this.piso = piso;
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
}
