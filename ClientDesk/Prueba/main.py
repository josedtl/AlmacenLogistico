import tkinter as tk
from persona_filter_component import persona_filter_componenente

# Función para mostrar el ID seleccionado
def mostrar_id():
    selected_id = filtro_persona.get_selected_id()
    print(selected_id)

# Configuración de la ventana principal
root = tk.Tk()
root.title("Formulario Principal")

entry_var = tk.StringVar()

# Crear una instancia del componente
filtro_persona = persona_filter_componenente(root, entry_var)

# Entrada para mostrar el valor seleccionado
entry = tk.Entry(root, textvariable=entry_var, width=80, state='readonly')
entry.pack(pady=20)

# Botón para abrir la ventana de filtrado
btn_filter = tk.Button(root, text="Filtrar Personas", command=filtro_persona.open_filter_window)
btn_filter.pack(pady=10)

# Botón para mostrar el ID seleccionado
btn_mostrar_id = tk.Button(root, text="Mostrar ID Seleccionado", command=mostrar_id)
btn_mostrar_id.pack(pady=10)

root.mainloop()
