
import tkinter as tk
from tkinter import ttk
from add_edit_window import AddEditWindow

class FormPersonaPageMain(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)

        self.tree = ttk.Treeview(self, columns=(
            "Nº", "Documento", "Numero", "Nombres", "ApellidoPaterno", 
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

    def open_add_window(self):
        AddEditWindow(self)

    def open_edit_window(self, event):
        item = self.tree.selection()
        if item:
            item_values = self.tree.item(item, 'values')
            AddEditWindow(self, item_values, item)
