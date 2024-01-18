/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Enumerados;

/**
 *
 * @author DAVID
 */
public enum ProcessActionEnum {

    Loaded(0),
    Add(1),
    Delete(2),
    Update(3);
    private final int valor;

    ProcessActionEnum(int valor) {
        this.valor = valor;
    }

    public int getValor() {
        return valor;
    }

}
