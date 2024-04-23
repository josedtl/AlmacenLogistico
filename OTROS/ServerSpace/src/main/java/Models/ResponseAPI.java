    
package Models;

import com.fasterxml.jackson.annotation.JsonProperty;
public class ResponseAPI<T> {

    private boolean state;
    private String message;
    private T value;

    // Constructor por defecto
    public ResponseAPI() {
        this.state = true;
        this.message = "";
    }

    // Constructor con parámetros
    public ResponseAPI(T valor, boolean state, String message) {
        this.state = state;
        this.message = (message == null || message.isEmpty()) ? "Correcto" : message;
        this.value = valor;
    }

    // Constructor con solo mensaje
    public ResponseAPI(String message) {
        this.state = false;
        this.message = message;
    }

    @JsonProperty("State")
    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    @JsonProperty("Message")
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @JsonProperty("Value")
    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}