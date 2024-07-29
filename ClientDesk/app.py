import tkinter as tk
from tkinter import ttk, messagebox
import requests
from Services.EnLista import *
from tkcalendar import DateEntry

def hello():
    messagebox.showinfo("Mensaje", "Hola, mundo")

def about():
    messagebox.showinfo("Acerca de", "Este es un ejemplo de menú en tkinter")

def sumar():
    try:
        num1 = int(entry_num1.get())
        num2 = int(entry_num2.get())
        resultado = num1 + num2
        label_resultado.config(text=f"Resultado: {resultado}")
    except ValueError:
        label_resultado.config(text="Por favor, ingresa números válidos.")


def cargar_datos():
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


# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Sumadora")

# Crear widgets
label_TipoDocumento = tk.Label(ventana, text="Tipo Documento:", width=20)
combo_datos = ttk.Combobox(ventana, state="readonly", width=27)

label_NumeroDocumento = tk.Label(ventana, text="Número Documento:", width=20)
entry_NumeroDocumento = ttk.Entry(ventana, width=30)

label_Nombres = tk.Label(ventana, text="Nombres:", width=20)
entry_Nombres = ttk.Entry(ventana, width=30)

label_ApellidoPaterno = tk.Label(ventana, text="Apellido Paterno:", width=20)
entry_ApellidoPaterno = ttk.Entry(ventana, width=30)

label_ApellidoMaterno = tk.Label(ventana, text="Apellido Materno:", width=20)
entry_ApellidoMaterno = ttk.Entry(ventana, width=30)

label_FechaNacimiento = tk.Label(ventana, text="Fecha de Nacimiento:", width=20)
fecha_seleccionada = tk.StringVar()
calendario = DateEntry(
    ventana, textvariable=fecha_seleccionada, width=27, borderwidth=2
)
# calendario.pack(padx=10, pady=10)

label_Sexo = tk.Label(ventana, text="Sexo:", width=20)
combo_Sexo = ttk.Combobox(ventana, state="readonly", width=27)

label_EstadoCivil = tk.Label(ventana, text="Estado Civil", width=20)
combo_EstadoCivil = ttk.Combobox(ventana, state="readonly", width=27)

label_Telefono = tk.Label(ventana, text="Telefono:", width=20)
entry_Telefono = ttk.Entry(ventana, width=30)

label_Correo = tk.Label(ventana, text="Correo:", width=20)
entry_Correo = ttk.Entry(ventana, width=30)


btn_sumar = tk.Button(ventana, text="Sumar", command=sumar)

label_resultado = tk.Label(ventana, text="Resultado: ")

# Colocar widgets en la ventana
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
btn_sumar.grid(row=_Row, column=0, columnspan=2, pady=_pady)

_Row += 1
label_resultado.grid(row=_Row, column=0, columnspan=2, pady=_pady)

cargar_datos()

# Iniciar el bucle principal
ventana.mainloop()
