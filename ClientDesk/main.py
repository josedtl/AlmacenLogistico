import tkinter as tk
from tkinter import messagebox
from form1 import Form1
from form2 import Form2
from formPersonaPage import  FormPersona
from Formulario.PerssonaNatural.Main import  FormPersonaPageMain
class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Aplicación con Menú y Formularios")
        
        # Crear la barra de menú
        menu_bar = tk.Menu(self)
        
        # Crear el menú "Formularios"
        form_menu = tk.Menu(menu_bar, tearoff=0)
        form_menu.add_command(label="Formulario 1", command=self.load_form1)
        form_menu.add_command(label="Formulario 2", command=self.load_form2)
        form_menu.add_command(label="Persona", command=self.load_formPersona)
        form_menu.add_command(label="Persona Main", command=self.load_formPersonaMain)
        menu_bar.add_cascade(label="Formularios", menu=form_menu)
        
        # Crear el menú "Ayuda"
        help_menu = tk.Menu(menu_bar, tearoff=0)
        help_menu.add_command(label="Acerca de...", command=self.about)
        menu_bar.add_cascade(label="Ayuda", menu=help_menu)
        
        # Configurar la ventana para usar la barra de menú
        self.config(menu=menu_bar)
        
        # Crear un contenedor donde se cargarán los formularios
        self.container = tk.Frame(self)
        self.container.pack(fill="both", expand=True)
        
    def clear_container(self):
        for widget in self.container.winfo_children():
            widget.destroy()
    
    def load_form1(self):
        self.clear_container()
        form1 = Form1(self.container)
        form1.pack(fill="both", expand=True)
    
    def load_form2(self):
        self.clear_container()
        form2 = Form2(self.container)
        form2.pack(fill="both", expand=True)
        
    def load_formPersona(self):
        self.clear_container()
        m_formPersona = FormPersona(self.container)
        m_formPersona.pack(fill="both", expand=True)

    def load_formPersonaMain(self):
        self.clear_container()
        m_formPersonaMain = FormPersonaPageMain(self.container)
        m_formPersonaMain.pack(fill="both", expand=True)
    
    def about(self):
        messagebox.showinfo("Acerca de", "Esta es una aplicación de ejemplo con formularios en tkinter")

if __name__ == "__main__":
    app = App()
    app.mainloop()
