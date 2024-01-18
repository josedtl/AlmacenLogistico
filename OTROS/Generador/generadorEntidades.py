import os
import re

def map_mysql_to_java_type(mysql_type):
    type_mapping = {
        "int": "int",
        "smallint": "int",
        "decimal": "double",  # Usamos BigDecimal para campos decimales
        "varchar": "String",
        "char": "String",
        "datetime": "Timestamp",
        "date": "Timestamp",
        "bit": "boolean"
        # Agrega más mapeos según sea necesario
    }
    return type_mapping.get(mysql_type, "double")  # Por defecto, se considera como String

def generate_class_from_sql(script, output_path):
    # script = re.sub(r'\([^)]*\)', '', script)
    lines = script.split("\n")
    table_name = lines[0].split(" ")[2].split(".")[1]
    
    attributes = []
    first_attribute_name = ""
    
    for line in lines[1:-2]:
        parts = line.strip().split(" ")
        parts[1] = re.sub(r'\([^)]*\)', '', parts[1])
            
        print(parts)
        attribute_name = parts[0]
        mysql_attribute_type = parts[1]
        java_attribute_type = map_mysql_to_java_type(mysql_attribute_type)
        attributes.append({"name": attribute_name, "type": java_attribute_type})
        
        if not first_attribute_name:
            first_attribute_name = attribute_name
    
    class_name = first_attribute_name.replace("Id", "") + "Entity"
    
    class_code = f"package EntityLayer;\n\n"
    class_code += "import com.fasterxml.jackson.annotation.JsonProperty;\n"
    class_code += "import Enumerados.ProcessActionEnum;\n"
    class_code += "import java.sql.Timestamp;\n\n"
    
    class_code += f"public class {class_name} {{\n\n"
    
    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = attribute_name[0].lower() + attribute_name[1:]  # Primera letra en minúscula
        attribute_type = attribute["type"]
        
        class_code += f"    @JsonProperty(\"{attribute_name}\")\n"
        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f"    private {attribute_type} {java_attribute_name} = 0;\n"
        elif attribute_type == "String":
            class_code += f"    private {attribute_type} {java_attribute_name} = \"\";\n"
        elif attribute_type == "BigDecimal":
            class_code += f"    private {attribute_type} {java_attribute_name} = null;\n"
        elif attribute_type == "Timestamp":
            class_code += f"    private {attribute_type} {java_attribute_name} = null;\n"
        elif attribute_type == "boolean":
            class_code += f"    private {attribute_type} {java_attribute_name} = false;\n"
        
        getter_method = f"    public {attribute_type} get{attribute_name}() {{\n"
        getter_method += f"        return {java_attribute_name};\n    }}\n\n"
        class_code += getter_method
        
        setter_method = f"    public void set{attribute_name}({attribute_type} {java_attribute_name}) {{\n"
        setter_method += f"        this.{java_attribute_name} = {java_attribute_name};\n    }}\n\n"
        class_code += setter_method
    
    class_code += "}\n"
    
    output_file = os.path.join(output_path, f"{class_name}.java")
    with open(output_file, "w") as java_file:
        java_file.write(class_code)



def generate_class_from_sqlEntidad(attributesData:[], output_path):
    # script = re.sub(r'\([^)]*\)', '', script)
    attributes =[]
    first_attribute_name = ""
    
    for line in attributesData:
        java_attribute_type = map_mysql_to_java_type(line['type'])
        attribute_name =line['name']
        attributes.append({"name": attribute_name, "type": java_attribute_type})

    first_attribute_name = attributes[0]['name']
    
    class_name = first_attribute_name.replace("Id", "") + "Entity"
    
    class_code = f"package EntityLayer;\n\n"
    class_code += "import com.fasterxml.jackson.annotation.JsonProperty;\n"
    class_code += "import Enumerados.ProcessActionEnum;\n"
    class_code += "import java.util.Date;\n\n"
    
    class_code += f"public class {class_name} {{\n\n"
    
    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = attribute_name[0].lower() + attribute_name[1:]  # Primera letra en minúscula
        attribute_type = attribute["type"]
        
        class_code += f"    @JsonProperty(\"{attribute_name}\")\n"
        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f"    private {attribute_type} {java_attribute_name} = 0;\n"
        elif attribute_type == "String":
            class_code += f"    private {attribute_type} {java_attribute_name} = \"\";\n"
        elif attribute_type == "double":
            class_code += f"    private {attribute_type} {java_attribute_name} = null;\n"
        elif attribute_type == "Date":
            class_code += f"    private {attribute_type} {java_attribute_name} = null;\n"
        elif attribute_type == "boolean":
            class_code += f"    private {attribute_type} {java_attribute_name} = false;\n"
        
        getter_method = f"    public {attribute_type} get{attribute_name}() {{\n"
        getter_method += f"        return {java_attribute_name};\n    }}\n\n"
        class_code += getter_method
        
        setter_method = f"    public void set{attribute_name}({attribute_type} {java_attribute_name}) {{\n"
        setter_method += f"        this.{java_attribute_name} = {java_attribute_name};\n    }}\n\n"
        class_code += setter_method

    class_code +="\n\n" 
    class_code += f"    @JsonProperty(\"Action\")\n"
    class_code += "    private ProcessActionEnum action = ProcessActionEnum.Loaded;\n\n"
    class_code += "    public int getAction() {\n" 
    class_code += "        return action.getValor();\n" 
    class_code += "    }\n\n" 
    class_code += "    public void setAction(ProcessActionEnum Action) {\n" 
    class_code += "        this.action = Action;\n" 
    class_code += "    }\n" 
    class_code += "}\n" 

    output_file = os.path.join(output_path, f"{class_name}.java")
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
