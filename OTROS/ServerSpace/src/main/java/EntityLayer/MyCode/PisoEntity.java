
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;


public class PisoEntity {
    
     @JsonProperty("PisoId")
    private int pisoId = 0;

    public int getPisoId() {
        return pisoId;
    }

    public void setPisoId(int pisoId) {
        this.pisoId = pisoId;
    }
    @JsonProperty("Codigo")
    private String codigo = "";

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}
