
import requests
import json
from datetime import datetime
import tkinter as tk
from tkinter import ttk, messagebox
from tkcalendar import DateEntry
from Entidades.Despacho import DespachoDetalleSaveModel, DespachoSaveModel
from Services.InvocadorDespacho import *
from .EntidadComponente import EntidadComponente


class SaveDespacho(tk.Toplevel):
    def __init__(self, parent, item_values=None, item=None, refresh_callback=None):
        super().__init__(parent)
    
        self.refresh_callback = refresh_callback


        label_OrdenPedido = tk.Label(self, text="Orden de Pedido:", width=20)
        self.entry_OrdenPedido= ttk.Entry(self, width=30,)
        
        label_TipoRequerimiento = tk.Label(self, text="TipoRequerimiento:", width=20)
        self.entry_TipoRequerimiento = ttk.Entry(self, width=30,)
        # self.entry_TipoRequerimiento.state(['readonly'])

        label_Entidad = tk.Label(self, text="Responsable:", width=20)
        # self.entry_Entidad.state(['readonly'])
                                    
        self.entry_Entidad = ttk.Entry(self, width=30)
        
        label_FechaNacimiento = tk.Label(self, text="Fecha:", width=20)
        self.entry_Fecha= ttk.Entry(self, width=30)
        
        entry_var = tk.StringVar()
        self.filtro_persona = EntidadComponente(self, entry_var)
        
        label_EntidadEntregado = tk.Label(self, text="Entregado:", width=20)
        self.entry_EntidadEntregado = ttk.Entry(self,textvariable=entry_var,  width=30)

        self.btn_filter = tk.Button(self, text="Filtrar Personas", command=self.filtro_persona.open_filter_window)
        # self.btn_filter.pack(pady=10)
        # self.fecha_seleccionada = tk.StringVar()
        
        # self.calendario = DateEntry(self, textvariable=self.fecha_seleccionada, width=27, borderwidth=2, date_pattern='dd-MM-yyyy')

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
    
        _padx = 5
        _pady = 5
        _Row = 0
    
    
        _Row += 1
        label_OrdenPedido.grid(row=_Row, column=0,padx=_padx, pady=_pady)
        label_TipoRequerimiento.grid(row=_Row, column=1, padx=_padx, pady=_pady)
        label_Entidad.grid(row=_Row, column=2,columnspan=6, padx=_padx, pady=_pady)
        label_FechaNacimiento.grid(row=_Row, column=10, padx=_padx, pady=_pady)
        _Row += 1
        
        self.entry_OrdenPedido.grid(row=_Row, column=0, padx=_padx, pady=_pady,sticky="ew")
        self.entry_TipoRequerimiento.grid(row=_Row, column=1, padx=_padx, pady=_pady,sticky="ew")
        self.entry_Entidad.grid(row=_Row, column=2,columnspan=8, padx=_padx, pady=_pady,sticky="ew")
        self.entry_Fecha.grid(row=_Row, column=10, padx=_padx, pady=_pady,sticky="ew")

        _Row += 1
        label_EntidadEntregado.grid(row=_Row, column=0,padx=_padx, pady=_pady)
        _Row += 1
        self.entry_EntidadEntregado.grid(row=_Row, column=0, padx=_padx, pady=_pady,sticky="ew")
        self.btn_filter.grid(row=_Row, column=1, padx=_padx, pady=_pady,sticky="ew")
        _Row += 1
        self.tree.grid(row=_Row, column=0,columnspan=12, padx=_padx, pady=_pady)

        _Row += 1
        btn_Guardar.grid(row=_Row, column=5, pady=_pady)
        btn_Cancelar.grid(row=_Row, column=7,  pady=_pady)
        
        try:
            self.OrdenPedidoId = 0
            if item_values != None:
                 lstDespachoCabecera: List[DespachoSaveModel] = []
                 lstDespachoCabecera = InvocadorDespacho.ObtenerCabecera(item_values[0])
                 
                 self.ItemEnt = lstDespachoCabecera[0]
                 
                 self.OrdenPedidoId = self.ItemEnt.OrdenPedidoId
                 self.entry_TipoRequerimiento.insert(0,self.ItemEnt.NomProceso)
                 self.entry_Entidad.insert(0,self.ItemEnt.NomResponsable)
                 self.entry_OrdenPedido.insert(0,self.ItemEnt.Codigo)
                 self.entry_Fecha.insert(0,self.ItemEnt.FechaRegistro)
                 self.Accion = 3
                 
                 lstDespachoDetalle: List[DespachoDetalleSaveModel] = []
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


        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")

    def CancelarEvent(self):
        self.destroy()

    def GuardarEvent(self):
        self.ItemEnt.EntidadEntregadoId = self.filtro_persona.get_selected_id()
        print(self.ItemEnt)
        # InvocadorDespacho.Registrar(self.ItemEnt)















