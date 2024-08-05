
import requests
import json
from datetime import datetime
import tkinter as tk
from tkinter import ttk, messagebox
from tkcalendar import DateEntry
from Services.InvocadorDespacho import *


class SaveDespacho(tk.Toplevel):
    def __init__(self, parent, item_values=None, item=None, refresh_callback=None):
        super().__init__(parent)
    
        self.refresh_callback = refresh_callback

        label_TipoRequerimiento = tk.Label(self, text="TipoRequerimiento:", width=20)
        self.entry_TipoRequerimiento = ttk.Entry(self, width=30)

        label_Entidad = tk.Label(self, text="Responsable:", width=20)
        self.entry_Entidad = ttk.Entry(self, width=30)
                                       
        label_FechaNacimiento = tk.Label(self, text="Fecha de Nacimiento:", width=20)
        self.fecha_seleccionada = tk.StringVar()
        self.calendario = DateEntry(self, textvariable=self.fecha_seleccionada, width=27, borderwidth=2, date_pattern='dd-MM-yyyy')

        self.tree = ttk.Treeview(self, columns=(
            "OrdenPedidoDetalleId", "Nº", "NomProducto", "CodigoUM", "CantidadSolicitado", "Cantidad", 
             "CantidadAtendido"
        ), show='headings')  


        self.tree.heading("Nº", text="Nº")
        self.tree.heading("NomProducto", text="NomProducto")
        self.tree.heading("CodigoUM", text="CodigoUM")
        self.tree.heading("CantidadSolicitado", text="CantidadSolicitado")
        self.tree.heading("Cantidad", text="Cantidad")
        self.tree.heading("CantidadAtendido", text="Cantidad a Despachar")

        self.tree.column("OrdenPedidoDetalleId", width=0, stretch=tk.NO)
        self.tree.column("Nº", width=50)
        self.tree.column("NomProducto", width=100)
        self.tree.column("CodigoUM", width=150)
        self.tree.column("CantidadSolicitado", width=150)
        self.tree.column("Cantidad", width=150)
        self.tree.column("CantidadAtendido", width=150)
        self.scrollbar = ttk.Scrollbar(self, orient="vertical", command=self.tree.yview)

        btn_Guardar = tk.Button(self, text="Guardar", command=self.GuardarEvent)
        btn_Cancelar = tk.Button(self, text="Cancelar", command=self.CancelarEvent)
    
        _padx = 10
        _pady = 10
        _Row = 0
    
        _Row += 1
        label_TipoRequerimiento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_TipoRequerimiento.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Entidad.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_Entidad.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_FechaNacimiento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.calendario.grid(row=_Row, column=1, padx=_padx, pady=_pady)
       
        self.tree.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        btn_Guardar.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        _Row += 1
        btn_Cancelar.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        
        try:
            self.OrdenPedidoId = 0
            if item_values != None:
                 lstDespachoCabecera: List[DespachoCabeceraModel] = []
                 lstDespachoCabecera = InvocadorDespacho.ObtenerCabecera(item_values[0])
                 
                 self.ItemEnt = lstDespachoCabecera[0]
                 self.ItemEnt.EntidadId = 18
                 self.OrdenPedidoId = self.ItemEnt.OrdenPedidoId
                 self.entry_TipoRequerimiento.insert(0,self.ItemEnt.NomProceso)
                 self.entry_Entidad.insert(0,self.ItemEnt.NomResponsable)
            
                 self.Accion = 3
                 
                 lstDespachoDetalle: List[DespachoDetalleModel] = []
                 reservas: List[DespachoReservaOPModel] = []
                 
                 
                 lstDespachoDetalle = InvocadorDespacho.ObtenerDetalle(item_values[0])
                 reservas = InvocadorDespacho.ObtenerReservaOPItem(item_values[0])
       
                 for row in self.tree.get_children():
                    self.tree.delete(row)
                
                
                 for i, item in enumerate(lstDespachoDetalle):
                     item.Cantidad = 0
                     
                     for ii in reservas:
                        if  ii.OrdenPedidoDetalleId == item.OrdenPedidoDetalleId:
                            item.Cantidad += ii.Cantidad
                            item.DetalleReservaItem.append(ii)
                     self.ItemEnt.DetalleItems.append(item)
                            
                 self.lstDespachoDetalle = lstDespachoDetalle
                 
                 for i, item in enumerate(self.lstDespachoDetalle):
          
                     row = (
                        item.OrdenPedidoDetalleId,
                        i + 1,
                        item.NomProducto,
                        item.CodigoUM, 
                        item.CantidadSolicitado,
                        item.Cantidad,
                        item.CantidadAtendido
                     )
                     self.tree.insert("", "end", values=row)

                #  print(self.ItemEnt)

        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")

    def CancelarEvent(self):
        self.destroy()

    def GuardarEvent(self):
        print(self.ItemEnt)
        InvocadorDespacho.Registrar(self.ItemEnt)
