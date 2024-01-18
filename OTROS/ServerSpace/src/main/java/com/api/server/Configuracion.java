/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.api.server;

import Framework.EnvItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

/**
 *
 * @author DAVID
 */
public class Configuracion {

    @Autowired
    private Environment environment;

    public void DataConfi() {

        EnvItem.setURL(environment.getProperty("app.url"));
        EnvItem.setUsuario(environment.getProperty("app.user"));
        EnvItem.setContrasena(environment.getProperty("app.password"));

    }

}
