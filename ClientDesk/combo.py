


import json
import tkinter as tk
from tkinter import ttk
import requests

from Entidades.Genral import EntidadLikeModel
from envData import envData


class AutocompleteEntry(tk.Entry):
    def __init__(self, master, *args, **kwargs):
        super().__init__(master, *args, **kwargs)
        self.master = master
        self.bind('<KeyRelease>', self.on_keyrelease)
        self.canvas = None

    def on_keyrelease(self, event):
        if self.canvas:
            self.canvas.destroy()
        if self.get() == "":
            return

        search_text = self.get()
        self.update_suggestions(search_text)


    def update_suggestions(self, search_text):
        try:
            Itemdb =EntidadLikeModel () 
            Itemdb.Valor1= search_text
            url = f"{envData.servidor}api/General/EntidadBuscarNombreCompletoItem"
            headers = {'Content-Type': 'application/json'}
            dict_data = Itemdb.dict()
            json_output = json.dumps(dict_data, indent=4)
            print(json_output)
            response = requests.post(url, data=json_output, headers=headers)
            data = response.json()
            datalist= data.get("Value", [])
            # print(data)
            # self['values'] = datalist
            suggestions =[row['Nombres'] for row in datalist]
            # print(suggestions)
            self.show_suggestions(suggestions)
            # if datalist:
            #     self.event_generate('<Down>')

                # entities = DespachoCabeceraModel(**datalist) 
            # if response.status_code == 200:
            #     suggestions = response.json()
            #     self['values'] = datalist
            #     if suggestions:
            #         self.event_generate('<Down>')
            #     return data
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []
    def show_suggestions(self, suggestions):
        if self.canvas:
            self.canvas.destroy()

        self.canvas = tk.Canvas(self.master, width=self.winfo_width())
        self.canvas.bind("<Button-1>", self.on_select)

        for i, suggestion in enumerate(suggestions):
            self.canvas.create_text(5, i * 20 + 5, anchor="nw", text=suggestion, tags="item")

        self.canvas.place(x=self.winfo_x(), y=self.winfo_y() + self.winfo_height())
        self.canvas.lift()

    def on_select(self, event):
        selected_item = self.canvas.find_withtag("current")
        if selected_item:
            text = self.canvas.itemcget(selected_item, "text")
            self.delete(0, tk.END)
            self.insert(0, text)
        self.canvas.destroy()

root = tk.Tk()
root.title("Autocomplete Entry")

frame = tk.Frame(root)
frame.pack(padx=10, pady=10)

entry = AutocompleteEntry(frame)
entry.pack()

root.mainloop()