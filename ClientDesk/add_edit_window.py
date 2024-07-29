import tkinter as tk
from tkinter import ttk
from Services.EnLista import *
from tkcalendar import DateEntry

class AddEditWindow(tk.Toplevel):
    def __init__(self, parent, item_values=None, item=None):
        super().__init__(parent)
        
                
        label_TipoDocumento = tk.Label(self, text="Tipo Documento:", width=20)
        combo_datos = ttk.Combobox(self, state="readonly", width=27)

        label_NumeroDocumento = tk.Label(self, text="Número Documento:", width=20)
        entry_NumeroDocumento = ttk.Entry(self, width=30)

        label_Nombres = tk.Label(self, text="Nombres:", width=20)
        entry_Nombres = ttk.Entry(self, width=30)

        label_ApellidoPaterno = tk.Label(self, text="Apellido Paterno:", width=20)
        entry_ApellidoPaterno = ttk.Entry(self, width=30)

        label_ApellidoMaterno = tk.Label(self, text="Apellido Materno:", width=20)
        entry_ApellidoMaterno = ttk.Entry(self, width=30)

        label_FechaNacimiento = tk.Label(self, text="Fecha de Nacimiento:", width=20)
        fecha_seleccionada = tk.StringVar()
        calendario = DateEntry(
            self, textvariable=fecha_seleccionada, width=27, borderwidth=2
        )
        # calendario.pack(padx=10, pady=10)

        label_Sexo = tk.Label(self, text="Sexo:", width=20)
        combo_Sexo = ttk.Combobox(self, state="readonly", width=27)

        label_EstadoCivil = tk.Label(self, text="Estado Civil", width=20)
        combo_EstadoCivil = ttk.Combobox(self, state="readonly", width=27)

        label_Telefono = tk.Label(self, text="Telefono:", width=20)
        entry_Telefono = ttk.Entry(self, width=30)

        label_Correo = tk.Label(self, text="Correo:", width=20)
        entry_Correo = ttk.Entry(self, width=30)


        # btn_sumar = tk.Button(self, text="Sumar", command=sumar)

        label_resultado = tk.Label(self, text="Resultado: ")

        # Colocar widgets en la self
        _padx = 10
        _pady = 10
        _Row = 0
        label_TipoDocumento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        combo_datos.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_NumeroDocumento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_NumeroDocumento.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Nombres.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_Nombres.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_ApellidoPaterno.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_ApellidoPaterno.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_ApellidoMaterno.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_ApellidoMaterno.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_FechaNacimiento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        calendario.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Sexo.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        combo_Sexo.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_EstadoCivil.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        combo_EstadoCivil.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Telefono.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_Telefono.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Correo.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        entry_Correo.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        # btn_sumar.grid(row=_Row, column=0, columnspan=2, pady=_pady)

        _Row += 1
        label_resultado.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        
        try:
            data = EnLista.Get_EntListaCodigo("C001")
            combo_datos["values"] = ()
            valores = [item["Nombre"] for item in data]
            combo_datos["values"] = tuple(valores)

            dataSexo = EnLista.Get_EntListaCodigo("C007")
            combo_Sexo["values"] = ()
            valoresSexo = [item["Nombre"] for item in dataSexo]
            combo_Sexo["values"] = tuple(valoresSexo)

            dataEC = EnLista.Get_EntListaCodigo("C008")
            combo_EstadoCivil["values"] = ()
            valoresEC = [item["Nombre"] for item in dataEC]
            combo_EstadoCivil["values"] = tuple(valoresEC)

        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
        
        
    #     self.parent = parent
    #     self.item = item
    #     self.title("Agregar" if item_values is None else "Editar")

    #     self.entry_values = {
    #         "Documento": ttk.Combobox(self, values=["DNI", "RUC"]),
    #         "Numero": tk.Entry(self),
    #         "Nombres": tk.Entry(self),
    #         "ApellidoPaterno": tk.Entry(self),
    #         "ApellidoMaterno": tk.Entry(self),
    #         "Fecha de registro": tk.Entry(self),
    #         "Usuario": tk.Entry(self)
    #     }

    #     for idx, (label, entry) in enumerate(self.entry_values.items()):
    #         tk.Label(self, text=label).grid(row=idx, column=0, padx=5, pady=5, sticky=tk.W)
    #         entry.grid(row=idx, column=1, padx=5, pady=5)

    #     if item_values:
    #         for idx, (key, entry) in enumerate(self.entry_values.items()):
    #             entry_value = item_values[idx + 1]
    #             if key == "Documento":
    #                 entry.set(entry_value)
    #             else:
    #                 entry.insert(0, entry_value)

    #     self.action_button = tk.Button(self, text="Agregar" if item_values is None else "Editar", command=self.add_edit_entry)
    #     self.action_button.grid(row=len(self.entry_values), column=0, padx=5, pady=5, sticky=tk.W)

    #     if item_values:
    #         self.delete_button = tk.Button(self, text="Eliminar", command=self.delete_entry)
    #         self.delete_button.grid(row=len(self.entry_values), column=1, padx=5, pady=5, sticky=tk.W)

    # def add_edit_entry(self):
    #     values = [entry.get() if not isinstance(entry, ttk.Combobox) else entry.get() for entry in self.entry_values.values()]
    #     if self.item is None:
    #         new_id = len(self.parent.tree.get_children()) + 1
    #         self.parent.tree.insert("", "end", values=[new_id] + values + ["Editar/Eliminar"])
    #     else:
    #         new_values = [self.parent.tree.item(self.item, 'values')[0]] + values + ["Editar/Eliminar"]
    #         self.parent.tree.item(self.item, values=new_values)
    #     self.destroy()

    # def delete_entry(self):
    #     self.parent.tree.delete(self.item)
    #     self.destroy()
