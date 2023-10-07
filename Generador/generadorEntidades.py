import os
import re


def map_mysql_to_java_type(mysql_type):
    type_mapping = {
        "int": "int",
        "smallint": "int",
        "decimal": "float",  # Usamos BigDecimal para campos decimales
        "varchar": "str",
        "char": "str",
        "datetime": "datetime",
        "date": "datetime",
        "bit": "bool"
        # Agrega más mapeos según sea necesario
    }
    return type_mapping.get(
        mysql_type, "double"
    )  # Por defecto, se considera como String


def generate_class_from_sqlEntidad(attributesData: [], output_path):
    # script = re.sub(r'\([^)]*\)', '', script)
    attributes = []
    first_attribute_name = ""

    for line in attributesData:
        java_attribute_type = map_mysql_to_java_type(line["type"])
        attribute_name = line["name"]
        attributes.append({"name": attribute_name, "type": java_attribute_type})

    first_attribute_name = attributes[0]["name"]

    class_name = first_attribute_name.replace("Id", "") + "Entity"
    class_nameSaveModel = first_attribute_name.replace("Id", "") + "SaveModel"
    class_nameItemModel = first_attribute_name.replace("Id", "") + "ItemModel"

    class_code = f"from datetime import datetime\n"
    class_code += "from pydantic import BaseModel\n"
    class_code += (
        "from Utilidades.Enumerado.ProcessActionEnum import ProcessActionEnum\n\n"
    )

    class_code += f"class {class_nameSaveModel}(BaseModel):\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        class_code += f"    {attribute_name}: {attribute_type} \n"

    class_code += f"    Action: ProcessActionEnum\n"

    class_code += "\n"
    class_code += f"class {class_nameItemModel}:\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        class_code += f"    {attribute_name}: {attribute_type} \n"
    class_code += "\n"
    class_code += f"    def Cargar(_DB):\n"
    class_code += f"        c =  {class_nameItemModel}()\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        if attribute_type == "bool":
            class_code += f'        c.{attribute_name} = bool(ord(_DB["{attribute_name}"])) \n'
        else:
            class_code += f'        c.{attribute_name} = _DB["{attribute_name}"] \n'

    class_code += f"        return c\n"

    output_file = os.path.join(output_path, f"{class_name}.py")
    with open(output_file, "w") as java_file:
        java_file.write(class_code)


# Script SQL
sql_script = """CREATE TABLE spaceDB.catalogo_cabeceradata (
  CabeceraDataId int NOT NULL AUTO_INCREMENT,
  CantidadEntera int DEFAULT NULL,
  CantidadDecimal decimal(10, 2) DEFAULT NULL,
  CantidadNumerico decimal(10, 2) DEFAULT NULL,
  CantidadEnteraSmall smallint DEFAULT NULL,
  LetrasGrande varchar(255) DEFAULT NULL,
  LetrasMedia varchar(20) DEFAULT NULL,
  LetrasPequena varchar(2) DEFAULT NULL,
  LetrasPequenaSmall char(20) DEFAULT NULL,
  LetrasPequenaSmallUno char(9) DEFAULT NULL,
  Fecha datetime DEFAULT NULL,
  FechaSola date DEFAULT NULL,
  Estado bit(1) DEFAULT NULL,
  PRIMARY KEY (CabeceraDataId)
)"""

# Generar la clase Java en la carpeta EntityLayer
# output_folder = "EntityLayer"
# if not os.path.exists(output_folder):
#     os.makedirs(output_folder)
# generate_class_from_sql(sql_script, output_folder)
# print(f"Clase Java generada y guardada en '{output_folder}'")
