import os
import re


def map_mysql_to_java_type(mysql_type):
    type_mapping = {
        "int": "int",
        "smallint": "int",
        "decimal": "double",  # Usamos BigDecimal para campos decimales
        "varchar": "String",
        "char": "String",
        "datetime": "Date",
        "date": "Date",
        "bit": "boolean"
        # Agrega más mapeos según sea necesario
    }
    return type_mapping.get(
        mysql_type, "double"
    )  # Por defecto, se considera como String


def generate_class_from_sql(script, output_path):
    # script = re.sub(r'\([^)]*\)', '', script)
    print(script)
    lines = script.split("\n")
    table_name = lines[0].split(" ")[2].split(".")[1]

    attributes = []
    first_attribute_name = ""

    for line in lines[1:-2]:
        parts = line.strip().split(" ")
        parts[1] = re.sub(r"\([^)]*\)", "", parts[1])

        print(parts)
        attribute_name = parts[0]
        mysql_attribute_type = parts[1]
        java_attribute_type = map_mysql_to_java_type(mysql_attribute_type)
        attributes.append({"name": attribute_name, "type": java_attribute_type})

        if not first_attribute_name:
            first_attribute_name = attribute_name

    class_nameSolo = first_attribute_name.replace("Id", "")
    class_name = first_attribute_name.replace("Id", "") + "DB"
    class_nameEntity = first_attribute_name.replace("Id", "") + "ItemModel"



    class_code = ""
    class_code += f"from DataLayer.{class_name} import *\n"
    class_code += f"from EntityLayer.{class_nameEntity} import *\n\n\n"

    class_code += f"class {class_nameSolo}:\n"
    class_code += f"    def Save(Ent: {class_nameEntity}):\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.Save(Ent)\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    }\n\n"

    class_code += f"    def GetItems():\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.GetItems()\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    }\n\n"

    class_code += f"    def GetItem(Id: int):\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.GetItem(Id)\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    }\n\n"

    class_code += f"    def Delete(Id: int):\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.Delete(Id)\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    }\n\n"

    output_file = os.path.join(output_path, f"{class_nameSolo}.py")
    with open(output_file, "w") as java_file:
        java_file.write(class_code)



def generate_class_from_sqlNegocio(attributesData:[], output_path):
    attributes =[]
    first_attribute_name = ""
    
    for line in attributesData:
        java_attribute_type = map_mysql_to_java_type(line['type'])
        attribute_name =line['name']
        attributes.append({"name": attribute_name, "type": java_attribute_type})

    first_attribute_name = attributes[0]['name']

    class_nameSolo = first_attribute_name.replace("Id", "")
    class_name = first_attribute_name.replace("Id", "") + "DB"
    class_nameEntity = first_attribute_name.replace("Id", "") + "Entity"
    class_nameSaveModel = first_attribute_name.replace("Id", "") + "SaveModel"
    class_code = ""

    class_code = ""
    class_code += f"from DataLayer.{class_name} import *\n"
    class_code += f"from EntityLayer.{class_nameEntity} import *\n"
    class_code += f"from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore\n\n\n"

    class_code += f"class {class_nameSolo}:\n"
    class_code += f"    def Save(Ent: {class_nameSaveModel}):\n"
    class_code += f"        try:\n"
    class_code += f"            StartTransaction()\n"
    class_code += f"            data = {class_name}.Save(Ent)\n"
    class_code += f"            EndTransaction()\n"
    class_code += f"            return data\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            Restore()\n"
    class_code += "            print(e)\n"
    class_code += "    \n"

    class_code += f"    def GetItems():\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.GetItems()\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    \n"

    class_code += f"    def GetItem(Id: int):\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.GetItem(Id)\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    \n"

    class_code += f"    def Delete(Id: int):\n"
    class_code += f"        try:\n"
    class_code += f"            return {class_name}.Delete(Id)\n"
    class_code += f"        except Exception as e:\n"
    class_code += "            print(e)\n"
    class_code += "    \n"

    output_file = os.path.join(output_path, f"{class_nameSolo}.py")
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

