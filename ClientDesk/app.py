import tkinter as tk
from tkinter import messagebox
from controller import FormController

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Aplicación con Menú y Formularios")
        
        # Crear un contenedor donde se cargarán los formularios
        self.container = tk.Frame(self)
        self.container.pack(fill="both", expand=True)

        # Inicializar el controlador de formularios
        self.form_controller = FormController(self.container)
        
        # Crear la barra de menú
        menu_bar = tk.Menu(self)
        
        # Crear el menú "Formularios"
        form_menu = tk.Menu(menu_bar, tearoff=0)
        form_menu.add_command(label="Despacho", command=self.form_controller.load_formDespachoMain)
        form_menu.add_command(label="Persona", command=self.form_controller.load_formPersonaMain)
        menu_bar.add_cascade(label="Formularios", menu=form_menu)
        
        # Crear el menú "Ayuda"
        help_menu = tk.Menu(menu_bar, tearoff=0)
        help_menu.add_command(label="Acerca de...", command=self.about)
        menu_bar.add_cascade(label="Ayuda", menu=help_menu)
        
        # Configurar la ventana para usar la barra de menú
        self.config(menu=menu_bar)
    
    def about(self):
        messagebox.showinfo("Acerca de", "Esta es una aplicación de ejemplo con formularios en tkinter")

if __name__ == "__main__":
    app = App()
    app.mainloop()
