package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.sql.Timestamp;

public class InfraListaEntity {

    @JsonProperty("ListaId")
    private int listaId = 0;
    public int getListaId() {
        return listaId;
    }

    public void setListaId(int listaId) {
        this.listaId = listaId;
    }

    @JsonProperty("CampoId")
    private int campoId = 0;
    public int getCampoId() {
        return campoId;
    }

    public void setCampoId(int campoId) {
        this.campoId = campoId;
    }


    @JsonProperty("Codigo")
    private String codigo = "";
    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
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

// COMPLEMENTARIO*************************************************************************************************************************************



}
