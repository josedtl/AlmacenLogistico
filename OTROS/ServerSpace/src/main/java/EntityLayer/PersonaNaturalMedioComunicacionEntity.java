package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.sql.Timestamp;

public class PersonaNaturalMedioComunicacionEntity extends EntityLayer.MyCode.PersonaNaturalMedioComunicacionEntity {

    @JsonProperty("PersonaNaturalMedioComunicacionId")
    private int personaNaturalMedioComunicacionId = 0;

    public int getPersonaNaturalMedioComunicacionId() {
        return personaNaturalMedioComunicacionId;
    }

    public void setPersonaNaturalMedioComunicacionId(int personaNaturalMedioComunicacionId) {
        this.personaNaturalMedioComunicacionId = personaNaturalMedioComunicacionId;
    }
//    aca

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId = 0;

    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
    }

    @JsonProperty("MedioComunicacionId")
    private int medioComunicacionId = 0;

    public int getMedioComunicacionId() {
        return medioComunicacionId;
    }

    public void setMedioComunicacionId(int medioComunicacionId) {
        this.medioComunicacionId = medioComunicacionId;
    }

    @JsonProperty("Dato")
    private String dato = "";

    public String getDato() {
        return dato;
    }

    public void setDato(String dato) {
        this.dato = dato;
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
