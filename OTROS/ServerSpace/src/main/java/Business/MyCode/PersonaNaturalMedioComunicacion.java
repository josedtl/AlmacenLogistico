/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Business.MyCode;

import DataLayer.PersonaNaturalMedioComunicacionDB;
import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import Framework.Inj;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class PersonaNaturalMedioComunicacion {

    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetMedioComunicacionDetalle(int Id) {
        try {
            PersonaNaturalMedioComunicacionDB BD = new PersonaNaturalMedioComunicacionDB();
            Inj.IniciarTranssaccionConsulta();
            return BD.GetMedioComunicacionDetalle(Id);
        } catch (Exception ex) {
            System.out.println("ERROR " + ex);
            throw new UnsupportedOperationException("MENSAJE :" + ex);
        }
    }

}
