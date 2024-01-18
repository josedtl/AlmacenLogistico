
package com.api.server;

import Business.Empresa;
import EntityLayer.EmpresaEntity;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author RUTH
 */
@RestController
@RequestMapping("/api/Empresa")
public class EmpresaController {
 

    @GetMapping("/getEmpresaItems")
    public ArrayList<EmpresaEntity> getEmpresaItems() {

        Empresa BS = new Empresa();
        return BS.getEmpresaItems();

    }
    
}
