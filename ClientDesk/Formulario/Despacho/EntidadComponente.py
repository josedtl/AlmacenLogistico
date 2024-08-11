import tkinter as tk
from tkinter import ttk
from Services.InvocadorGeneral import *

class EntidadComponente:
    def __init__(self, parent, entry_var):
        self.parent = parent
        self.entry_var = entry_var
        self.selected_id = None
    def open_filter_window(self):
        self.filter_window = tk.Toplevel(self.parent)
        self.filter_window.title("Filtrar Personas")

        self.search_var = tk.StringVar()

        # Entrada de texto para el filtro
        search_entry = tk.Entry(self.filter_window, textvariable=self.search_var, width=80)
        search_entry.pack(pady=10, fill=tk.X)

        # Tabla (Treeview) para mostrar la lista filtrada
        columns = ("EntidadId", "Nombres")
        self.treeview = ttk.Treeview(self.filter_window, columns=columns, show='headings', height=15)
        self.treeview.column("EntidadId", width=0, stretch=tk.NO)
        self.treeview.heading("Nombres", text="Nombres")
        self.treeview.pack(pady=10, fill=tk.BOTH, expand=True)

        # Vincular el evento de doble clic a la tabla
        self.treeview.bind("<Double-1>", self.on_treeview_double_click)

        # Botón para aceptar la selección
        btn_select = tk.Button(self.filter_window, text="Aceptar", command=self.select_item)
        btn_select.pack(pady=10, side=tk.BOTTOM)

        # Actualizar la tabla cuando se escribe en el campo de búsqueda
        self.search_var.trace("w", self.update_treeview)

        search_entry.focus()

    def update_treeview(self, *args):
        search_term = self.search_var.get()
        for item in self.treeview.get_children():
            self.treeview.delete(item)
        
        if len(search_term) >= 3:  # Solo buscar si hay al menos 3 caracteres
            ListaPersona = InvocadorGeneral.EntidadBuscarNombreCompletoItem(search_term)
            
            for persona_data in ListaPersona:
                self.treeview.insert('', tk.END, values=(persona_data.EntidadId, persona_data.Nombres))

    def select_item(self):
        selected_item = self.treeview.selection()
        if selected_item:
            self.selected_id = self.treeview.item(selected_item)['values'][0]
            selected_persona = self.treeview.item(selected_item)['values'][1]
            self.entry_var.set(selected_persona)
            self.filter_window.destroy()

    def on_treeview_double_click(self, event):
        self.select_item()

    def get_selected_id(self):
        return self.selected_id
