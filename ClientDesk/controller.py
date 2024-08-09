import tkinter as tk
from form1 import Form1
from form2 import Form2
from Formulario.Despacho.Main import DespachoMain
from Formulario.PerssonaNatural.Main import FormPersonaPageMain

class FormController:
    def __init__(self, container):
        self.container = container
    
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
        
    def load_formDespachoMain(self):
        self.clear_container()
        m_formDespachoMain = DespachoMain(self.container)
        m_formDespachoMain.pack(fill="both", expand=True)

    def load_formPersonaMain(self):
        self.clear_container()
        m_formPersonaMain = FormPersonaPageMain(self.container)
        m_formPersonaMain.pack(fill="both", expand=True)