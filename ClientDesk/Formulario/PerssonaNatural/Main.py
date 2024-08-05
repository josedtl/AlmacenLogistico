import tkinter as tk
from tkinter import ttk
from .SavePopup import AddEditWindow
from Services.EnLista import *


class FormPersonaPageMain(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)

        self.tree = ttk.Treeview(self, columns=(
            "PersonaNaturalId", "Nº", "Documento", "Numero", "Nombres", "ApellidoPaterno", 
            "ApellidoMaterno", "Fecha de registro", "Usuario", "Action"
        ), show='headings')

        self.tree.heading("Nº", text="Nº")
        self.tree.heading("Documento", text="Documento")
        self.tree.heading("Numero", text="Numero")
        self.tree.heading("Nombres", text="Nombres")
        self.tree.heading("ApellidoPaterno", text="ApellidoPaterno")
        self.tree.heading("ApellidoMaterno", text="ApellidoMaterno")
        self.tree.heading("Fecha de registro", text="Fecha de registro")
        self.tree.heading("Usuario", text="Usuario")
        self.tree.heading("Action", text="Action")

        self.tree.column("PersonaNaturalId", width=0, stretch=tk.NO)
        self.tree.column("Nº", width=50)
        self.tree.column("Documento", width=100)
        self.tree.column("Numero", width=100)
        self.tree.column("Nombres", width=150)
        self.tree.column("ApellidoPaterno", width=150)
        self.tree.column("ApellidoMaterno", width=150)
        self.tree.column("Fecha de registro", width=150)
        self.tree.column("Usuario", width=100)
        self.tree.column("Action", width=150)

        self.tree.pack(side=tk.LEFT, fill="both", expand=True)

        self.scrollbar = ttk.Scrollbar(self, orient="vertical", command=self.tree.yview)
        self.scrollbar.pack(side=tk.RIGHT, fill="y")

        self.tree.configure(yscrollcommand=self.scrollbar.set)

        self.add_button = tk.Button(self, text="Agregar", command=self.open_add_window)
        self.add_button.pack(pady=10)

        self.tree.bind("<Double-1>", self.open_edit_window)
        # Cargar datos iniciales
        self.dataApi = EnLista.Get_PersonaLista()

        self.refresh_table()


    def open_add_window(self):
        AddEditWindow(self, refresh_callback=self.refresh_table)
        


    def open_edit_window(self, event):
        item = self.tree.selection()
        
        if item:
            item_values = self.tree.item(item, 'values')
            # print(item_values)
            AddEditWindow(self, item_values, item, refresh_callback=self.refresh_table)
    
    def refresh_table(self):
        # Limpiar tabla
        for row in self.tree.get_children():
            self.tree.delete(row)
        
        # Cargar nuevos datos desde dataApi
        for i, item in enumerate(self.dataApi):
            # Asumiendo que item es un diccionario
            row = (
                item.PersonaNaturalId,
                i + 1,
                item.NomDocumento,
                item.NumDocumento, 
                item.Nombres,
                item.ApellidoPaterno,
                item.ApellidoMaterno,
                item.FechaRegistro,
                item.CodUsuario,
                ""  # Aquí puedes añadir algún texto o dejarlo vacío para la columna 'Action'
            )
            self.tree.insert("", "end", values=row)