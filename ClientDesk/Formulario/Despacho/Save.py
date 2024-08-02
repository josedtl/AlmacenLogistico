
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
            "OrdenPedidoDetalleId", "Nº", "NomProducto", "CodigoUM", "CantidadSolicitado", "CantidadReservado", 
             "CantidadAtendido"
        ), show='headings')  


        self.tree.heading("Nº", text="Nº")
        self.tree.heading("NomProducto", text="NomProducto")
        self.tree.heading("CodigoUM", text="CodigoUM")
        self.tree.heading("CantidadSolicitado", text="CantidadSolicitado")
        self.tree.heading("CantidadReservado", text="CantidadReservado")
        self.tree.heading("CantidadAtendido", text="CantidadAtendido")

        self.tree.column("OrdenPedidoDetalleId", width=0, stretch=tk.NO)
        self.tree.column("Nº", width=50)
        self.tree.column("NomProducto", width=100)
        self.tree.column("CodigoUM", width=150)
        self.tree.column("CantidadSolicitado", width=150)
        self.tree.column("CantidadReservado", width=150)
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
                 self.lstDespachoCabecera = InvocadorDespacho.ObtenerCabecera(item_values[0])
                 
                 ItemEnt = self.lstDespachoCabecera[0]
                 self.OrdenPedidoId = ItemEnt.OrdenPedidoId
                 self.entry_TipoRequerimiento.insert(0,ItemEnt.NomProceso)
                 self.entry_Entidad.insert(0,ItemEnt.NomResponsable)
            
                 self.Accion = 3
                 self.lstDespachoDetalle = InvocadorDespacho.ObtenerDetalle(item_values[0])
                 print (self.lstDespachoDetalle )
                 for row in self.tree.get_children():
                    self.tree.delete(row)
                 for i, item in enumerate(self.lstDespachoDetalle):
                        # Asumiendo que item es un diccionario
                     row = (
                        item.OrdenPedidoDetalleId,
                        i + 1,
                        item.NomProducto,
                        item.CodigoUM, 
                        item.CantidadSolicitado,
                        item.CantidadReservado,
                        item.CantidadAtendido
                     )
                     self.tree.insert("", "end", values=row)

        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")

    def CancelarEvent(self):
        self.destroy()

    def GuardarEvent(self):

        m_DocumentoId = self.lstDocumentos[self.combo_datos.current()].ListaId
        m_SexoId = self.lstSexo[self.combo_Sexo.current()].ListaId
        m_EstadoCivilId = self.lstEstadoCivil[self.combo_EstadoCivil.current()].ListaId
        # Recolectar los datos del formulario
        tipo_documento = m_DocumentoId  # Asumiendo que el índice corresponde al ID
        numero_documento = self.entry_NumeroDocumento.get()
        nombres = self.entry_Nombres.get()
        apellido_paterno = self.entry_ApellidoPaterno.get()
        apellido_materno = self.entry_ApellidoMaterno.get()
        fecha_nacimiento = self.calendario.get_date().isoformat()
        sexo = m_SexoId  # Asumiendo que el índice corresponde al ID
        estado_civil = m_EstadoCivilId  # Asumiendo que el índice corresponde al ID
        telefono = self.entry_Telefono.get()
        correo = self.entry_Correo.get()
     
        # Crear el objeto PersonaNatural
        # persona_natural = PersonaNatural(
        #     persona_natural_id= self.PersonaNaturalId ,
        #     tipo_documento_identidad_id=tipo_documento,
        #     num_documento=numero_documento,
        #     fecha_registro=datetime.now().isoformat(),
        #     cod_usuario="current_user",  # Reemplazar con el usuario actual
        #     ubigeo_id=0,  # Asignar correctamente según tu lógica
        #     nombres=nombres,
        #     apellido_paterno=apellido_paterno,
        #     apellido_materno=apellido_materno,
        #     fecha_nacimiento=fecha_nacimiento,
        #     direccion="",  # Asignar correctamente según tu lógica
        #     telefono=telefono,
        #     correo=correo,
        #     sexo_id=sexo,
        #     estado_civil_id=estado_civil,
        #     action=self.Accion ,
        #     estado_registro=True
        # )

        self.refresh_callback()
        self.destroy()
