
package Models;

import EntityLayer.ServicioBasicoEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ServicioBasicoItemModel {
    
    public ServicioBasicoItemModel(){
        this.servicioBasicoId =0;
        this.codigo ="";
        this.nombre="";
    }
    
    public ServicioBasicoItemModel(ServicioBasicoEntity Ent){
        this.servicioBasicoId =Ent.getServicioBasicoId();
        this.codigo =Ent.getCodigo();
        this.nombre=Ent.getNombre();
    }
    
     @JsonProperty("ServicioBasicoId")
    private int servicioBasicoId = 0;
    public int getServicioBasicoId() {
        return servicioBasicoId;
    }

    public void setServicioBasicoId(int servicioBasicoId) {
        this.servicioBasicoId = servicioBasicoId;
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
}
