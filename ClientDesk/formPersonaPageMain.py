


import tkinter as tk
from tkinter import ttk, messagebox

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

        self.entry_frame = tk.Frame(self)
        self.entry_frame.pack(fill="x")

        self.entry_values = {
            "Documento": tk.Entry(self.entry_frame),
            "Numero": tk.Entry(self.entry_frame),
            "Nombres": tk.Entry(self.entry_frame),
            "ApellidoPaterno": tk.Entry(self.entry_frame),
            "ApellidoMaterno": tk.Entry(self.entry_frame),
            "Fecha de registro": tk.Entry(self.entry_frame),
            "Usuario": tk.Entry(self.entry_frame)
        }
        
        for idx, (label, entry) in enumerate(self.entry_values.items()):
            tk.Label(self.entry_frame, text=label).grid(row=0, column=idx, padx=5, pady=5)
            entry.grid(row=1, column=idx, padx=5, pady=5)
        
        self.add_button = tk.Button(self, text="Agregar", command=self.add_entry)
        self.add_button.pack(pady=10)

        self.tree.bind("<Double-1>", self.on_double_click)

    def add_entry(self):
        new_id = len(self.tree.get_children()) + 1
        values = [new_id] + [entry.get() for entry in self.entry_values.values()] + ["Editar/Eliminar"]
        self.tree.insert("", "end", values=values)
        
        for entry in self.entry_values.values():
            entry.delete(0, tk.END)

    def on_double_click(self, event):
        item = self.tree.selection()
        if item:
            item_values = self.tree.item(item, 'values')
            ActionWindow(self, item_values, item)

class ActionWindow(tk.Toplevel):
    def __init__(self, parent, item_values, item):
        super().__init__(parent)
        self.parent = parent
        self.item = item
        self.title("Editar/Eliminar")

        self.entry_values = {
            "Documento": tk.Entry(self),
            "Numero": tk.Entry(self),
            "Nombres": tk.Entry(self),
            "ApellidoPaterno": tk.Entry(self),
            "ApellidoMaterno": tk.Entry(self),
            "Fecha de registro": tk.Entry(self),
            "Usuario": tk.Entry(self)
        }

        for idx, (label, entry) in enumerate(self.entry_values.items()):
            tk.Label(self, text=label).grid(row=0, column=idx, padx=5, pady=5)
            entry.grid(row=1, column=idx, padx=5, pady=5)
            entry.insert(0, item_values[idx + 1])

        self.edit_button = tk.Button(self, text="Editar", command=self.edit_entry)
        self.edit_button.grid(row=2, column=0, padx=5, pady=5)
        
        self.delete_button = tk.Button(self, text="Eliminar", command=self.delete_entry)
        self.delete_button.grid(row=2, column=1, padx=5, pady=5)

    def edit_entry(self):
        new_values = [self.parent.tree.item(self.item, 'values')[0]] + [entry.get() for entry in self.entry_values.values()] + ["Editar/Eliminar"]
        self.parent.tree.item(self.item, values=new_values)
        self.destroy()

    def delete_entry(self):
        self.parent.tree.delete(self.item)
        self.destroy()
