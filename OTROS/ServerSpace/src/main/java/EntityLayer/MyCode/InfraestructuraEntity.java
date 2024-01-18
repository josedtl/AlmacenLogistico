
package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InfraestructuraEntity {
     @JsonProperty("InfraestructuraId")
    private int infraestructuraId = 0;
    public int getInfraestructuraId() {
        return infraestructuraId;
    }

    public void setInfraestructuraId(int infraestructuraId) {
        this.infraestructuraId = infraestructuraId;
    }
}
