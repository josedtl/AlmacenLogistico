/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DataLayer.MyCode;

import EntityLayer.UbigeoEntity;
import Framework.injector;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author DAVID
 */
public class UbigeoDB {
    
    injector Inj = new injector();

          public ArrayList<UbigeoEntity> GetUbigeoLikeItem(String Nombre) { 

            ArrayList<UbigeoEntity> DatoMemoria = new ArrayList<>();
            UbigeoEntity en;
            try {
                Inj.Sp("sp_UbigeoLikeItem");
                Inj.Pmt_String("v_Nombre", Nombre, false);
                ResultSet rs = Inj.RunSelect();
                while (rs.next()) {

                    en = new UbigeoEntity();
                    en.setUbigeoId(rs.getInt("UbigeoId"));
                    en.setCodUbigeo(rs.getInt("CodUbigeo"));
                    en.setDesUbigeo(rs.getString("DesUbigeo"));
                    DatoMemoria.add(en);

                }

            } catch (SQLException e) {
                System.out.println("ERROR "+e);
                throw new UnsupportedOperationException("Datalater :" + e);
            }
            return DatoMemoria;
        }

}
