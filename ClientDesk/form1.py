import tkinter as tk
from tkinter import messagebox

class Form1(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        tk.Label(self, text="Formulario 1").pack(pady=10)
        tk.Label(self, text="Nombre:").pack(pady=5)
        tk.Entry(self).pack(pady=5)
        tk.Label(self, text="Edad:").pack(pady=5)
        tk.Entry(self).pack(pady=5)
        tk.Button(self, text="Enviar", command=self.submit).pack(pady=10)
    
    def submit(self):
        messagebox.showinfo("Formulario 1", "Formulario 1 enviado")
