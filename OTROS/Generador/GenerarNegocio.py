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
    class_nameEntity = first_attribute_name.replace("Id", "") + "Entity"



    class_code = ""

    class_code = ""
    class_code += "package Business;\n\n"
    class_code += f"import DataLayer.{class_name};\n"
    class_code += f"import EntityLayer.{class_nameEntity};\n"
    class_code += "import java.util.ArrayList;\n\n"
    class_code += f"public class {class_nameSolo} {{\n\n"
    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItems() {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.GetAllItems();\n"
    class_code += "    }\n\n"
    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItem(int Id) {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.GetAllItem(Id);\n"
    class_code += "    }\n\n"
    class_code += f"    public {class_nameEntity} Save({class_nameEntity} Item) {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.Save(Item);\n"
    class_code += "    }\n\n"
    class_code += "    public Boolean Delete(int Id) {\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.Delete(Id);\n"
    class_code += "    }\n"
    class_code += "}\n"

    output_file = os.path.join(output_path, f"{class_nameSolo}.java")
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

    class_code = ""

    class_code = ""
    class_code += "package Business;\n\n"
    class_code += f"import DataLayer.{class_name};\n"
    class_code += f"import EntityLayer.{class_nameEntity};\n"
    class_code += "import java.util.ArrayList;\n\n"
    class_code += f"public class {class_nameSolo} {{\n\n"
    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItems() {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.GetAllItems();\n"
    class_code += "    }\n\n"
    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItem(int Id) {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.GetAllItem(Id);\n"
    class_code += "    }\n\n"
    class_code += f"    public {class_nameEntity} Save({class_nameEntity} Item) {{\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.Save(Item);\n"
    class_code += "    }\n\n"
    class_code += "    public Boolean Delete(int Id) {\n"
    class_code += f"        {class_name} BD = new {class_name}();\n"
    class_code += "        return BD.Delete(Id);\n"
    class_code += "    }\n"
    class_code += "}\n"

    output_file = os.path.join(output_path, f"{class_nameSolo}.java")
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

