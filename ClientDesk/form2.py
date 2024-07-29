import tkinter as tk
from tkinter import messagebox

class Form2(tk.Frame):
    def __init__(self, parent):
        super().__init__(parent)
        tk.Label(self, text="Formulario 2").pack(pady=10)
        tk.Label(self, text="Email:").pack(pady=5)
        tk.Entry(self).pack(pady=5)
        tk.Label(self, text="Teléfono:").pack(pady=5)
        tk.Entry(self).pack(pady=5)
        tk.Button(self, text="Enviar", command=self.submit).pack(pady=10)
    
    def submit(self):
        messagebox.showinfo("Formulario 2", "Formulario 2 enviado")
