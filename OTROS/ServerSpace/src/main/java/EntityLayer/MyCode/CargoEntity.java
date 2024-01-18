package EntityLayer.MyCode;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CargoEntity{

    @JsonProperty("PruebaId")
    private int pruebaId = 0;
    public int getPruebaId() {
        return pruebaId;
    }

    public void setPruebaId(int pruebaId) {
        this.pruebaId = pruebaId;
    }
    
}
