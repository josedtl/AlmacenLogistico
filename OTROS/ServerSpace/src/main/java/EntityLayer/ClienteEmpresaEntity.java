package EntityLayer;

import com.fasterxml.jackson.annotation.JsonProperty;
import Enumerados.ProcessActionEnum;
import java.util.Date;

public class ClienteEmpresaEntity {

    @JsonProperty("ClienteEmpresaId")
    private int clienteEmpresaId = 0;
    public int getClienteEmpresaId() {
        return clienteEmpresaId;
    }

    public void setClienteEmpresaId(int clienteEmpresaId) {
        this.clienteEmpresaId = clienteEmpresaId;
    }

    @JsonProperty("ClienteId")
    private int clienteId = 0;
    public int getClienteId() {
        return clienteId;
    }

    public void setClienteId(int clienteId) {
        this.clienteId = clienteId;
    }

    @JsonProperty("EmpresaId")
    private int empresaId = 0;
    public int getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(int empresaId) {
        this.empresaId = empresaId;
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
