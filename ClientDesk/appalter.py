import tkinter as tk
from tkinter import ttk
from Services.InvocadorGeneral import *

# Función que actualiza la tabla filtrada desde la API
def update_treeview(*args):
    search_term = search_var.get()
    for item in treeview.get_children():
        treeview.delete(item)
    
    if len(search_term) >= 3:  # Solo buscar si hay al menos 3 caracteres
        ListaPersona = InvocadorGeneral.EntidadBuscarNombreCompletoItem(search_term)
        
        for persona_data in ListaPersona:
            treeview.insert('', tk.END, values=(persona_data.EntidadId, persona_data.Nombres))

# Función que maneja la selección y cierra la ventana emergente
def select_item():
    selected_item = treeview.selection()
    if selected_item:
        Id = treeview.item(selected_item)['values'][0]
        selected_persona = treeview.item(selected_item)['values'][1]
        entry_var.set(selected_persona)
        filter_window.destroy()

# Función para manejar el doble clic en la tabla
def on_treeview_double_click(event):
    select_item()

# Función para abrir la ventana emergente
def open_filter_window():
    global filter_window, treeview, search_var

    filter_window = tk.Toplevel(root)
    filter_window.title("Filtrar Personas")

    search_var = tk.StringVar()

    # Entrada de texto para el filtro
    search_entry = tk.Entry(filter_window, textvariable=search_var, width=80)
    search_entry.pack(pady=10, fill=tk.X)

    # Tabla (Treeview) para mostrar la lista filtrada
    columns = ("EntidadId", "Nombres")
    treeview = ttk.Treeview(filter_window, columns=columns, show='headings', height=15)
    treeview.column("EntidadId", width=0, stretch=tk.NO)
    treeview.heading("Nombres", text="Nombres")
    treeview.pack(pady=10, fill=tk.BOTH, expand=True)

    # Vincular el evento de doble clic a la tabla
    treeview.bind("<Double-1>", on_treeview_double_click)

    # Botón para aceptar la selección
    btn_select = tk.Button(filter_window, text="Aceptar", command=select_item)
    btn_select.pack(pady=10, side=tk.BOTTOM)

    # Actualizar la tabla cuando se escribe en el campo de búsqueda
    search_var.trace("w", update_treeview)

    search_entry.focus()

# Configuración de la ventana principal
root = tk.Tk()
root.title("Formulario Principal")

entry_var = tk.StringVar()

# Entrada para mostrar el valor seleccionado
entry = tk.Entry(root, textvariable=entry_var, width=80, state='readonly')
entry.pack(pady=20)

# Botón para abrir la ventana de filtrado
btn_filter = tk.Button(root, text="Filtrar Personas", command=open_filter_window)
btn_filter.pack(pady=10)

root.mainloop()
