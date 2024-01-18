/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Framework;

import Enumerados.ProcessActionEnum;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 *
 * @author DAVID
 */
public class Utilidades {

    public static String getFechaRegistro() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        return formattedDateTime;
    }

    public static ProcessActionEnum ConvetEnumAction(int Enumerado) {

        ProcessActionEnum dato = ProcessActionEnum.Loaded;
        switch (Enumerado) {
            case 0:
                dato = ProcessActionEnum.Loaded;
                break;
            case 1:
                dato = ProcessActionEnum.Add;
                break;
            case 2:
                dato = ProcessActionEnum.Delete;
                break;
            case 3:
                dato = ProcessActionEnum.Update;
                break;
        }

        return dato;
    }
}
