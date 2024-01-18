/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DataLayer.MyCode;

import EntityLayer.PersonaNaturalMedioComunicacionEntity;
import Framework.Inj;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class PersonaNaturalMedioComunicacionDB {

    public ArrayList<PersonaNaturalMedioComunicacionEntity> GetMedioComunicacionDetalle(int PersonaNaturalId) {

        ArrayList<PersonaNaturalMedioComunicacionEntity> DatoMemoria = new ArrayList<>();
        PersonaNaturalMedioComunicacionEntity en;
        try {
            Inj.Sp("sp_PersonaNaturalMedioComunicacionDetalle");
            Inj.Pmt_Integer("v_PersonaNaturalId", PersonaNaturalId, false);
            ResultSet rs = Inj.RunSelect();
            while (rs.next()) {

                en = new PersonaNaturalMedioComunicacionEntity();
                en.setPersonaNaturalMedioComunicacionId(rs.getInt("PersonaNaturalMedioComunicacionId"));
                en.setPersonaNaturalId(rs.getInt("PersonaNaturalId"));
                en.setMedioComunicacionId(rs.getInt("MedioComunicacionId"));
                en.setDato(rs.getString("Dato"));
                en.setFechaRegistro(rs.getTimestamp("FechaRegistro"));
                en.setCodUsuario(rs.getString("CodUsuario"));
                en.setEstadoRegistro(rs.getBoolean("EstadoRegistro"));
                en.setNomMedioComunicacion(rs.getString("NomMedioComunicacion"));
                DatoMemoria.add(en);

            }

        } catch (SQLException e) {
            System.out.println("ERROR " + e);
            throw new UnsupportedOperationException("Datalater :" + e);
        }
        return DatoMemoria;
    }

}
