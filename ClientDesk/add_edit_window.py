
import requests
import json
from datetime import datetime
import tkinter as tk
from tkinter import ttk, messagebox
from tkcalendar import DateEntry
from Services.EnLista import *
class PersonaNatural:
    def __init__(self, persona_natural_id, tipo_documento_identidad_id, num_documento, fecha_registro, cod_usuario,
                 ubigeo_id, nombres, apellido_paterno, apellido_materno, fecha_nacimiento, direccion, telefono,
                 correo, sexo_id, estado_civil_id, action, estado_registro):
        self.PersonaNaturalId = persona_natural_id
        self.TipoDocumentoIdentidadId = tipo_documento_identidad_id
        self.NumDocumento = num_documento
        self.FechaRegistro = fecha_registro
        self.CodUsuario = cod_usuario
        self.UbigeoId = ubigeo_id
        self.Nombres = nombres
        self.ApellidoPaterno = apellido_paterno
        self.ApellidoMaterno = apellido_materno
        self.FechaNacimiento = fecha_nacimiento
        self.Direccion = direccion
        self.Telefono = telefono
        self.Correo = correo
        self.SexoId = sexo_id
        self.EstadoCivilId = estado_civil_id
        self.Action = action
        self.EstadoRegistro = estado_registro

    def to_dict(self):
        return {
            "PersonaNaturalId": self.PersonaNaturalId,
            "TipoDocumentoIdentidadId": self.TipoDocumentoIdentidadId,
            "NumDocumento": self.NumDocumento,
            "FechaRegistro": self.FechaRegistro,
            "CodUsuario": self.CodUsuario,
            "UbigeoId": self.UbigeoId,
            "Nombres": self.Nombres,
            "ApellidoPaterno": self.ApellidoPaterno,
            "ApellidoMaterno": self.ApellidoMaterno,
            "FechaNacimiento": self.FechaNacimiento,
            "Direccion": self.Direccion,
            "Telefono": self.Telefono,
            "Correo": self.Correo,
            "SexoId": self.SexoId,
            "EstadoCivilId": self.EstadoCivilId,
            "Action": self.Action,
            "EstadoRegistro": self.EstadoRegistro
        }

def registrar_persona_natural(persona_natural):
    url = 'http://localhost/AlmacenLogisticoService/api/PersonaNatural/Registrar'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(persona_natural.to_dict()), headers=headers)

    data = response.json()
    return data
    # if response.status_code == 200:
    #     return response.json()
    # else:
    #     return {"error": response.status_code, "message": response.text}

class AddEditWindow(tk.Toplevel):
    def __init__(self, parent, item_values=None, item=None, refresh_callback=None):
        super().__init__(parent)
    
        self.refresh_callback = refresh_callback
        
        label_TipoDocumento = tk.Label(self, text="Tipo Documento:", width=20)
        self.combo_datos = ttk.Combobox(self, state="readonly", width=27)

        label_NumeroDocumento = tk.Label(self, text="Número Documento:", width=20)
        self.entry_NumeroDocumento = ttk.Entry(self, width=30)

        label_Nombres = tk.Label(self, text="Nombres:", width=20)
        self.entry_Nombres = ttk.Entry(self, width=30)

        label_ApellidoPaterno = tk.Label(self, text="Apellido Paterno:", width=20)
        self.entry_ApellidoPaterno = ttk.Entry(self, width=30)

        label_ApellidoMaterno = tk.Label(self, text="Apellido Materno:", width=20)
        self.entry_ApellidoMaterno = ttk.Entry(self, width=30)

        label_FechaNacimiento = tk.Label(self, text="Fecha de Nacimiento:", width=20)
        self.fecha_seleccionada = tk.StringVar()
        self.calendario = DateEntry(self, textvariable=self.fecha_seleccionada, width=27, borderwidth=2, date_pattern='dd-MM-yyyy')

        label_Sexo = tk.Label(self, text="Sexo:", width=20)
        self.combo_Sexo = ttk.Combobox(self, state="readonly", width=27)

        label_EstadoCivil = tk.Label(self, text="Estado Civil", width=20)
        self.combo_EstadoCivil = ttk.Combobox(self, state="readonly", width=27)

        label_Telefono = tk.Label(self, text="Telefono:", width=20)
        self.entry_Telefono = ttk.Entry(self, width=30)

        label_Correo = tk.Label(self, text="Correo:", width=20)
        self.entry_Correo = ttk.Entry(self, width=30)

        btn_Guardar = tk.Button(self, text="Guardar", command=self.GuardarEvent)
        btn_Cancelar = tk.Button(self, text="Cancelar", command=self.CancelarEvent)
    
        _padx = 10
        _pady = 10
        _Row = 0
        label_TipoDocumento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.combo_datos.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_NumeroDocumento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_NumeroDocumento.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Nombres.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_Nombres.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_ApellidoPaterno.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_ApellidoPaterno.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_ApellidoMaterno.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_ApellidoMaterno.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_FechaNacimiento.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.calendario.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Sexo.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.combo_Sexo.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_EstadoCivil.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.combo_EstadoCivil.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Telefono.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_Telefono.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        label_Correo.grid(row=_Row, column=0, padx=_padx, pady=_pady)
        self.entry_Correo.grid(row=_Row, column=1, padx=_padx, pady=_pady)

        _Row += 1
        btn_Guardar.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        _Row += 1
        btn_Cancelar.grid(row=_Row, column=0, columnspan=2, pady=_pady)
        
        try:
            self.lstDocumentos = EnLista.Get_EntListaCodigo("C001")
            self.combo_datos["values"] = ()
            valores = [item.Nombre for item in self.lstDocumentos]
            self.combo_datos["values"] = tuple(valores)

            self.lstSexo = EnLista.Get_EntListaCodigo("C007")
            self.combo_Sexo["values"] = ()
            valoresSexo = [item.Nombre for item in self.lstSexo]
            self.combo_Sexo["values"] = tuple(valoresSexo)

            self.lstEstadoCivil = EnLista.Get_EntListaCodigo("C008")
            self.combo_EstadoCivil["values"] = ()
            valoresEC = [item.Nombre for item in self.lstEstadoCivil ]
            self.combo_EstadoCivil["values"] = tuple(valoresEC)
            self.Accion = 1
            self.PersonaNaturalId = 0
            if item_values != None:
                 self.lstPersonaNaturalItems = EnLista.ObtenerItemPersonaNatural(item_values[0])
                 ItemEnt = self.lstPersonaNaturalItems[0]
                 posicionTipoDocumento = next((index for index, ent in enumerate(self.lstDocumentos) if ent.ListaId== ItemEnt.TipoDocumentoIdentidadId), -1)
   
                 self.PersonaNaturalId = ItemEnt.PersonaNaturalId
                 self.combo_datos.current(posicionTipoDocumento)
                 self.entry_NumeroDocumento.insert(0,ItemEnt.NumDocumento)
                 self.entry_Nombres.insert(0,ItemEnt.Nombres)
                 self.entry_ApellidoPaterno.insert(0,ItemEnt.ApellidoPaterno)
                 self.entry_ApellidoMaterno.insert(0,ItemEnt.ApellidoMaterno)
                 self.fecha_seleccionada.set(ItemEnt.FechaNacimiento.strftime('%d-%m-%Y'))
                 self.entry_Telefono.insert(0,ItemEnt.Telefono)
                 self.entry_Correo.insert(0,ItemEnt.Correo)
                 posicionSexo = next((index for index, ent in enumerate(self.lstSexo) if ent.ListaId== ItemEnt.SexoId), -1)
                 self.combo_Sexo.current(posicionSexo)
                 posicionEstadoCivil = next((index for index, ent in enumerate(self.lstEstadoCivil) if ent.ListaId== ItemEnt.EstadoCivilId), -1)
                 self.combo_EstadoCivil.current(posicionEstadoCivil)
                 self.Accion = 3

        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")

    def CancelarEvent(self):
        self.destroy()

    def GuardarEvent(self):

        m_DocumentoId = self.lstDocumentos[self.combo_datos.current()].ListaId
        m_SexoId = self.lstSexo[self.combo_Sexo.current()].ListaId
        m_EstadoCivilId = self.lstEstadoCivil[self.combo_EstadoCivil.current()].ListaId
        # Recolectar los datos del formulario
        tipo_documento = m_DocumentoId  # Asumiendo que el índice corresponde al ID
        numero_documento = self.entry_NumeroDocumento.get()
        nombres = self.entry_Nombres.get()
        apellido_paterno = self.entry_ApellidoPaterno.get()
        apellido_materno = self.entry_ApellidoMaterno.get()
        fecha_nacimiento = self.calendario.get_date().isoformat()
        sexo = m_SexoId  # Asumiendo que el índice corresponde al ID
        estado_civil = m_EstadoCivilId  # Asumiendo que el índice corresponde al ID
        telefono = self.entry_Telefono.get()
        correo = self.entry_Correo.get()
     
        # Crear el objeto PersonaNatural
        persona_natural = PersonaNatural(
            persona_natural_id= self.PersonaNaturalId ,
            tipo_documento_identidad_id=tipo_documento,
            num_documento=numero_documento,
            fecha_registro=datetime.now().isoformat(),
            cod_usuario="current_user",  # Reemplazar con el usuario actual
            ubigeo_id=0,  # Asignar correctamente según tu lógica
            nombres=nombres,
            apellido_paterno=apellido_paterno,
            apellido_materno=apellido_materno,
            fecha_nacimiento=fecha_nacimiento,
            direccion="",  # Asignar correctamente según tu lógica
            telefono=telefono,
            correo=correo,
            sexo_id=sexo,
            estado_civil_id=estado_civil,
            action=self.Accion ,
            estado_registro=True
        )
        # # Llamar a la función para registrar la persona natural
        resultado = registrar_persona_natural(persona_natural)
        print(resultado)
        self.refresh_callback()
        self.destroy()
        #         self.refresh_callback()
        # Mostrar un mensaje según el resultado
        # if "error" in resultado:
        #     messagebox.showerror("Error", f"Error al registrar: {resultado['message']}")
        # else:
        #     messagebox.showinfo("Éxito", "Persona registrada exitosamente")
        #     if self.refresh_callback:
        #         self.destroy()
        #         self.refresh_callback()
        
        


