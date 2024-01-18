
package Models;

import EntityLayer.PisoEntity;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PisoItemModel {

    public PisoItemModel() {
        this.pisoId = 0;
        this.codigo = "";
        this.valor = 0;
           
    }

    public PisoItemModel(PisoEntity Ent) {
        this.pisoId = Ent.getPisoId();
        this.codigo = Ent.getCodigo();
        this.valor = Ent.getValor();
    }

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

    @JsonProperty("Valor")
    private double valor = 0;

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

}
