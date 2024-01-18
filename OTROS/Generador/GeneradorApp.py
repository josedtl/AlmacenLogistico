import tkinter as tk
from tkinter import ttk
import pymysql
import os
import re
from generadorEntidades import generate_class_from_sqlEntidad
from GenerarDato import generate_class_from_sqlDatos
from GenerarNegocio import generate_class_from_sqlNegocio
from GenerarControlador import generate_class_from_sqlControlador
from GenerarStore import generate_class_from_sqlStore

class DatabaseApp:
    ERROR=""
    attributes = []
    attributesExtendido = []
    Mensaje = ""
    host = ""
    user = ""
    password = ""
    selected_database = ""
    def __init__(self, root):


        self.root = root
        self.root.title("MySQL Database List")

        self.label = tk.Label(root, text="Lista de Bases de Datos MySQL", font=("Helvetica", 16))
        self.label.pack(pady=10)

        self.host_label = tk.Label(root, text="Host:")
        self.host_label.pack()
        self.host_entry = tk.Entry(root)
        self.host_entry.insert(tk.END, "localhost")  # Valor por defecto
        self.host_entry.pack(pady=5)

        self.user_label = tk.Label(root, text="Usuario:")
        self.user_label.pack()
        self.user_entry = tk.Entry(root)
        self.user_entry.insert(tk.END, "root")  # Valor por defecto
        self.user_entry.pack(pady=5)

        self.password_label = tk.Label(root, text="Contraseña:")
        self.password_label.pack()
        self.password_entry = tk.Entry(root, show="*")
        self.password_entry.insert(tk.END, "123456")  # Valor por defecto
        self.password_entry.pack(pady=5)

        self.refresh_button = ttk.Button(root, text="Aceptar", command=self.refresh_databases)
        self.refresh_button.pack(pady=5)

        self.database_listbox = tk.Listbox(root, width=40, height=10)
        self.database_listbox.pack(padx=20, pady=10)
        self.database_listbox.bind("<<ListboxSelect>>", self.show_tables)

        self.tables_frame = tk.Frame(root)
        self.tables_frame.pack(padx=20, pady=10)

        self.tables_combobox = ttk.Combobox(self.tables_frame, width=40, state="readonly")
        self.tables_combobox.grid(row=1, columnspan=2, pady=5)

        self.text_area = tk.Text(root, height=10, width=30, state="disabled", foreground="blue")
        self.text_area.pack()

        button_frame = tk.Frame(root)
        button_frame.pack()

        self.compile_button = tk.Button(button_frame, text="Compilar", command=self.compile_action)
        self.compile_button.pack(side="left")

        self.generate_button = tk.Button(button_frame, text="Generar", command=self.generate_action)
        self.generate_button.pack(side="left")


    def compile_action(self):

        selected_table = self.tables_combobox.get()
        if not selected_table:
            return  # No hay tabla seleccionada, salir de la función
        self.attributes=[]
        try:
            connection = pymysql.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.selected_database,
                cursorclass=pymysql.cursors.DictCursor
            )

            with connection.cursor() as cursor:
                cursor.execute(f"DESCRIBE {selected_table}")
                table_fields = cursor.fetchall()

                for field in table_fields:
                    # self.fields_tree.insert("", "end", values=(field["Type"], field["Field"], field["Null"], field["Key"]))
                    TypeDatos = re.sub(r'\([^)]*\)', '', field["Type"])
                    self.attributes.append({"name": field["Field"], "type": TypeDatos})
                    self.attributesExtendido.append({"name": field["Field"], "type": field["Type"]})

        except pymysql.Error as e:
            self.ERROR="Error"

        finally:
            connection.close()
        self.Mensaje += "Compilación correcta\n"
        self.update_text_area()

    def generate_action(self):

        try:
            output_folderEntityLayer = "File Generado\EntityLayer"
            if not os.path.exists(output_folderEntityLayer):
                os.makedirs(output_folderEntityLayer)
            output_folderDataLayer = "File Generado\DataLayer"
            if not os.path.exists(output_folderDataLayer):
                os.makedirs(output_folderDataLayer)
            output_folderBusiness = "File Generado\Business"
            if not os.path.exists(output_folderBusiness):
                os.makedirs(output_folderBusiness)
            output_folderControllers = "File Generado\Controllers"
            if not os.path.exists(output_folderControllers):
                os.makedirs(output_folderControllers)

            output_folderStore = "File Generado\Procedimiento"
            if not os.path.exists(output_folderStore):
                os.makedirs(output_folderStore)
            generate_class_from_sqlEntidad(self.attributes, output_folderEntityLayer)
            generate_class_from_sqlDatos(self.attributes, output_folderDataLayer)
            generate_class_from_sqlNegocio(self.attributes, output_folderBusiness)
            generate_class_from_sqlControlador(self.attributes, output_folderControllers)
            generate_class_from_sqlStore(self.attributesExtendido,self.tables_combobox.get(), output_folderStore)
            self.Mensaje += "Archivos Generados\n"
            self.update_text_area()
        except pymysql.Error as e:
            self.ERROR="Error"
            

    def update_text_area(self):
        self.text_area.config(state="normal")
        self.text_area.delete(1.0, tk.END)
        self.text_area.insert(tk.END, self.Mensaje, "correct")
        self.text_area.config(state="disabled")
    def refresh_databases(self):
        self.database_listbox.delete(0, tk.END)  # Limpiar la lista antes de actualizar
        self.tables_combobox.set("")
        # self.fields_tree.delete(*self.fields_tree.get_children())

        self.host = self.host_entry.get()
        self.user = self.user_entry.get()
        self.password = self.password_entry.get()

        try:
            connection = pymysql.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                cursorclass=pymysql.cursors.DictCursor
            )
            
            with connection.cursor() as cursor:
                cursor.execute("SHOW DATABASES")
                databases = cursor.fetchall()

                for database in databases:
                    self.database_listbox.insert(tk.END, database['Database'])

        except pymysql.Error as e:
            self.ERROR="Error"

        finally:
            connection.close()

    def show_tables(self, event):
        self.selected_database = self.database_listbox.get(self.database_listbox.curselection())
        self.tables_combobox.set("")  # Limpiar la selección
        # self.fields_tree.delete(*self.fields_tree.get_children())

        try:
            connection = pymysql.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.selected_database,
                cursorclass=pymysql.cursors.DictCursor
            )
            
            with connection.cursor() as cursor:
                cursor.execute("SHOW TABLES")
                tables = cursor.fetchall()

                table_names = [table[f"Tables_in_{self.selected_database}"] for table in tables]
                self.tables_combobox["values"] = table_names

        except pymysql.Error as e:
            self.ERROR="Error"

        finally:
            connection.close()


if __name__ == "__main__":
    root = tk.Tk()
    app = DatabaseApp(root)
    root.mainloop()
