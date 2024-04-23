package Business;

import EntityLayer.InfraListaEntity;

import java.util.ArrayList;

import DataLayer.InfraListaDB;

public class InfraLista {
    
    public ArrayList<InfraListaEntity> GetAllItem(int Id) {
        InfraListaDB BD = new InfraListaDB();
        return BD.GetAllItem(Id);
    }
}
