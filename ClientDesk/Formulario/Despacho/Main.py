import tkinter as tk
from tkinter import ttk
from Services.InvocadorDespacho import InvocadorDespacho
from .Save import SaveDespacho

class DespachoMain(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)

        self.tree = ttk.Treeview(self, columns=(
            "OrdenPedidoId", "Nº", "Codigo", "Nombres", "NombreCompleto", "Documento", 
             "FechaRegistro"
        ), show='headings')

        self.tree.heading("Nº", text="Nº")
        self.tree.heading("Codigo", text="Codigo")
        self.tree.heading("Nombres", text="Tipo")
        self.tree.heading("NombreCompleto", text="NombreCompleto")
        self.tree.heading("Documento", text="Documento")
        self.tree.heading("FechaRegistro", text="Fecha de registro")

        self.tree.column("OrdenPedidoId", width=0, stretch=tk.NO)
        self.tree.column("Nº", width=50)
        self.tree.column("Codigo", width=100)
        self.tree.column("Nombres", width=150)
        self.tree.column("NombreCompleto", width=150)
        self.tree.column("Documento", width=150)
        self.tree.column("FechaRegistro", width=150)

        self.tree.pack(side=tk.LEFT, fill="both", expand=True)

        self.scrollbar = ttk.Scrollbar(self, orient="vertical", command=self.tree.yview)
        self.scrollbar.pack(side=tk.RIGHT, fill="y")

        self.tree.configure(yscrollcommand=self.scrollbar.set)


        self.tree.bind("<Double-1>", self.open_edit_window)
        # Cargar datos iniciales
        self.dataApi = InvocadorDespacho.ObtenerMain()

        self.refresh_table()



    def open_edit_window(self, event):
        item = self.tree.selection()
        
        if item:
            item_values = self.tree.item(item, 'values')
            # print(item_values)
            SaveDespacho(self, item_values, item, refresh_callback=self.refresh_table)
    
    def refresh_table(self):
        # Limpiar tabla
        for row in self.tree.get_children():
            self.tree.delete(row)
        
        # Cargar nuevos datos desde dataApi
        for i, item in enumerate(self.dataApi):
            # Asumiendo que item es un diccionario
            row = (
                item.OrdenPedidoId,
                i + 1,
                item.Codigo,
                item.Nombre, 
                item.NombreCompleto,
                item.Documento,
                item.FechaRegistro
            )
            self.tree.insert("", "end", values=row)