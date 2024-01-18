package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServicioBasicoEntity {
    
    @JsonProperty("ServicioBasicoId")
    private int servicioBasicoId = 0;
    public int getServicioBasicoId() {
        return servicioBasicoId;
    }

    public void setServicioBasicoId(int servicioBasicoId) {
        this.servicioBasicoId = servicioBasicoId;
    }
}
