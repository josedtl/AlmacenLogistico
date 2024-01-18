package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class ProveedorPersonaNaturalEntity {

    @JsonProperty("ProveedorPersonaNaturalId")
    private int proveedorPersonaNaturalId = 0;
    public int getProveedorPersonaNaturalId() {
        return proveedorPersonaNaturalId;
    }

    public void setProveedorPersonaNaturalId(int proveedorPersonaNaturalId) {
        this.proveedorPersonaNaturalId = proveedorPersonaNaturalId;
    }

    @JsonProperty("ProveedorId")
    private int proveedorId = 0;
    public int getProveedorId() {
        return proveedorId;
    }

    public void setProveedorId(int proveedorId) {
        this.proveedorId = proveedorId;
    }

    @JsonProperty("PersonaNaturalId")
    private int personaNaturalId = 0;
    public int getPersonaNaturalId() {
        return personaNaturalId;
    }

    public void setPersonaNaturalId(int personaNaturalId) {
        this.personaNaturalId = personaNaturalId;
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
