package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class ClientePersonaNaturalEntity {

    @JsonProperty("ClientePersonaNaturalId")
    private int clientePersonaNaturalId = 0;
    public int getClientePersonaNaturalId() {
        return clientePersonaNaturalId;
    }

    public void setClientePersonaNaturalId(int clientePersonaNaturalId) {
        this.clientePersonaNaturalId = clientePersonaNaturalId;
    }

    @JsonProperty("ClienteId")
    private int clienteId = 0;
    public int getClienteId() {
        return clienteId;
    }

    public void setClienteId(int clienteId) {
        this.clienteId = clienteId;
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
