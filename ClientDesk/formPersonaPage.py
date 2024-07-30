import tkinter as tk
from tkinter import ttk, messagebox
from Services.EnLista import *
from tkcalendar import DateEntry

class FormPersona(tk.Frame):
    

    def __init__(self, parent):
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
        
        btn_Guardar = tk.Button(self, text="Guardar", command=self.GuardarEvent)
        # btn_sumar = tk.Button(self, text="Sumar", command=sumar)


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
        btn_Guardar.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        
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
    

    def GuardarEvent(self):
        messagebox.showinfo("Formulario 1", "Formulario 1 enviado")
    