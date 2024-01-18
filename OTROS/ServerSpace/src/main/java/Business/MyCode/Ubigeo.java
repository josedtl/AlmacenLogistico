/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.MyCode;

import DataLayer.UbigeoDB;
import EntityLayer.UbigeoEntity;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class Ubigeo {
    
    public ArrayList<UbigeoEntity> GetUbigeoLikeItem(String Nombre) {
        UbigeoDB BD = new UbigeoDB();
        return BD.GetUbigeoLikeItem(Nombre);
    }

}
