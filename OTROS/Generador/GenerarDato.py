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

    class_code = f"package DataLayer;\n\n"

    class_code += f"import EntityLayer.{class_nameEntity};;\n"
    class_code += "import Enumerados.ProcessActionEnum;\n"
    class_code += "import Framework.injector;\n"
    class_code += "import java.sql.ResultSet;\n"
    class_code += "import java.sql.SQLException;\n"
    class_code += "import java.util.ArrayList;\n\n"

    class_code += f"public class {class_name} {{\n\n"

    class_code += "    injector Inj = new injector();\n\n"

    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItems() {{ \n\n"
    class_code += (
        f"        ArrayList<{class_nameEntity}> DatoMemoria = new ArrayList<>();\n"
    )
    class_code += f"        {class_nameEntity} en;\n"
    class_code += f"        try {{\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}AllItems");\n'
    class_code += f"            ResultSet rs = Inj.RunSelect();\n"
    class_code += f"            while (rs.next()) {{\n\n"
    class_code += f"                en = new {class_nameEntity}();\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "String":
            class_code += f'                en.set{attribute_name}(rs.getString("{attribute_name}"));\n'
        elif attribute_type == "double":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "Timestamp":
            class_code += f'                en.set{attribute_name}(rs.getTimestamp("{attribute_name}"));\n'
        elif attribute_type == "boolean":
            class_code += f'                en.set{attribute_name}(rs.getBoolean("{attribute_name}"));\n'

    class_code += "            }\n\n"
    class_code += "        } catch (SQLException e) {\n"
    class_code += '            System.out.println("ERROR "e);\n'
    class_code += (
        '            throw new UnsupportedOperationException("Datalater :" + e);\n'
    )
    class_code += "        }\n"
    class_code += "        return DatoMemoria;\n"
    class_code += "    }\n\n"

    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItem(int {first_attribute_name}) {{ \n\n"
    class_code += (
        f"        ArrayList<{class_nameEntity}> DatoMemoria = new ArrayList<>();\n"
    )
    class_code += f"        {class_nameEntity} en;\n"
    class_code += f"        try {{\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}AllItem");\n'
    class_code += f'            Inj.Pmt_Integer("v_{first_attribute_name}", {first_attribute_name}, false);\n'

    class_code += f"            ResultSet rs = Inj.RunSelect();\n"
    class_code += f"            while (rs.next()) {{\n\n"
    class_code += f"                en = new {class_nameEntity}();\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "String":
            class_code += f'                en.set{attribute_name}(rs.getString("{attribute_name}"));\n'
        elif attribute_type == "double":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "Timestamp":
            class_code += f'                en.set{attribute_name}(rs.getTimestamp("{attribute_name}"));\n'
        elif attribute_type == "boolean":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'

    class_code += "            }\n\n"
    class_code += "        } catch (SQLException e) {\n"
    class_code += '            System.out.println("ERROR "e);\n'
    class_code += (
        '            throw new UnsupportedOperationException("Datalater :" + e);\n'
    )
    class_code += "        }\n"
    class_code += "        return DatoMemoria;\n"
    class_code += "    }\n\n"

    class_code += f"    public {class_nameEntity} Save({class_nameEntity} entity) {{\n"
    class_code += "        Boolean State = null;\n"
    class_code += "        try {\n"
    class_code += f'            String Store = "sp_{class_nameSolo}_Save";\n'
    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {\n"
    )
    class_code += f'                Store = "sp_{class_nameSolo}_Update";\n'
    class_code += "            }\n"
    class_code += "            Inj.Sp(Store);\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_name == first_attribute_name:
            class_code += f'            Inj.Pmt_Integer("v_{attribute_name}", entity.get{attribute_name}(), true);\n'
        elif attribute_type == "int" or attribute_type == "smallint":
            class_code += f'            Inj.Pmt_Integer("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "String":
            class_code += f'            Inj.Pmt_String("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "double":
            class_code += f'            Inj.Pmt_Double("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "Timestamp":
            class_code += f'            Inj.Pmt_String("v_{attribute_name}", new java.sql.Date(entity.get{attribute_name}().getTime()), false);\n'
        elif attribute_type == "boolean":
            class_code += f'            Inj.Pmt_Boolean("v_{attribute_name}", entity.get{attribute_name}(), false);\n'

    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {\n"
    )
    class_code += "                int Id = Inj.RunInsert();\n"
    class_code += "                State = Id > 0;\n"
    class_code += "                if (State) {\n"
    class_code += f"                    entity.set{first_attribute_name}(Id);\n"
    class_code += "                }\n"
    class_code += "            }\n"
    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {\n"
    )
    class_code += "                Inj.RunUpdate();\n"
    class_code += "            }\n\n"
    class_code += "        } catch (Exception ex) {\n"
    class_code += (
        '            throw new UnsupportedOperationException("Datalater : " + ex);\n'
    )
    class_code += "        }\n"
    class_code += "        return entity;\n"
    class_code += "    }\n\n"

    class_code += "    public Boolean Delete(Integer Id) {\n\n"
    class_code += "        Boolean State = false;\n"
    class_code += "        try {\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}Delete");\n'
    class_code += (
        f'            Inj.Pmt_Integer("v_{first_attribute_name}", Id, false);\n'
    )
    class_code += "            State = Inj.RunDelete() > 0;\n"
    class_code += "        } catch (Exception ex) {\n"
    class_code += "            throw new UnsupportedOperationException(\"Datalater : \" + ex);\n"
    class_code += "        }\n"
    class_code += "        return State;\n"
    class_code += "    }\n\n"

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



def generate_class_from_sqlDatos(attributesData:[], output_path):
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

    class_code = f"package DataLayer;\n\n"

    class_code += f"import EntityLayer.{class_nameEntity};\n"
    class_code += "import Enumerados.ProcessActionEnum;\n"
    class_code += "import Framework.Inj;\n"
    class_code += "import Framework.Utilidades;\n"
    class_code += "import java.sql.ResultSet;\n"
    class_code += "import java.sql.SQLException;\n"
    class_code += "import java.util.ArrayList;\n\n"

    class_code += f"public class {class_name} {{\n\n"

    class_code += "    injector Inj = new injector();\n\n"

    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItems() {{ \n\n"
    class_code += (
        f"        ArrayList<{class_nameEntity}> DatoMemoria = new ArrayList<>();\n"
    )
    class_code += f"        {class_nameEntity} en;\n"
    class_code += f"        try {{\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}AllItems");\n'
    class_code += f"            ResultSet rs = Inj.RunSelect();\n"
    class_code += f"            while (rs.next()) {{\n\n"
    class_code += f"                en = new {class_nameEntity}();\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "String":
            class_code += f'                en.set{attribute_name}(rs.getString("{attribute_name}"));\n'
        elif attribute_type == "double":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "Date":
            class_code += f'                en.set{attribute_name}(rs.getTimestamp("{attribute_name}"));\n'
        elif attribute_type == "boolean":
            class_code += f'                en.set{attribute_name}(rs.getBoolean("{attribute_name}"));\n'
    class_code += "                DatoMemoria.add(en);\n\n"
    class_code += "            }\n\n"
    class_code += "        } catch (SQLException e) {\n"
    class_code += '            System.out.println("ERROR "+e);\n'
    class_code += (
        '            throw new UnsupportedOperationException("Datalater :" + e);\n'
    )
    class_code += "        }\n"
    class_code += "        return DatoMemoria;\n"
    class_code += "    }\n\n"

    class_code += f"    public ArrayList<{class_nameEntity}> GetAllItem(int {first_attribute_name}) {{ \n\n"
    class_code += (
        f"        ArrayList<{class_nameEntity}> DatoMemoria = new ArrayList<>();\n"
    )
    class_code += f"        {class_nameEntity} en;\n"
    class_code += f"        try {{\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}AllItem");\n'
    class_code += f'            Inj.Pmt_Integer("v_{first_attribute_name}", {first_attribute_name}, false);\n'

    class_code += f"            ResultSet rs = Inj.RunSelect();\n"
    class_code += f"            while (rs.next()) {{\n\n"
    class_code += f"                en = new {class_nameEntity}();\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_type == "int" or attribute_type == "smallint":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "String":
            class_code += f'                en.set{attribute_name}(rs.getString("{attribute_name}"));\n'
        elif attribute_type == "double":
            class_code += f'                en.set{attribute_name}(rs.getInt("{attribute_name}"));\n'
        elif attribute_type == "Date":
            class_code += f'                en.set{attribute_name}(rs.getTimestamp("{attribute_name}"));\n'
        elif attribute_type == "boolean":
            class_code += f'                en.set{attribute_name}(rs.getBoolean("{attribute_name}"));\n'
    class_code += "                DatoMemoria.add(en);\n\n"
    class_code += "            }\n\n"
    class_code += "        } catch (SQLException e) {\n"
    class_code += '            System.out.println("ERROR "+e);\n'
    class_code += (
        '            throw new UnsupportedOperationException("Datalater :" + e);\n'
    )
    class_code += "        }\n"
    class_code += "        return DatoMemoria;\n"
    class_code += "    }\n\n"

    class_code += f"    public {class_nameEntity} Save({class_nameEntity} entity) {{\n"
    class_code += "        Boolean State = null;\n"
    class_code += "        try {\n"
    class_code += f'            String Store = "sp_{class_nameSolo}_Save";\n'
    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {\n"
    )
    class_code += f'                Store = "sp_{class_nameSolo}_Update";\n'
    class_code += "            }\n"
    class_code += "            Inj.Sp(Store);\n"

    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = (
            attribute_name[0].lower() + attribute_name[1:]
        )  # Primera letra en minúscula
        attribute_type = attribute["type"]

        if attribute_name == first_attribute_name:
            class_code += f'            Inj.Pmt_Integer("v_{attribute_name}", entity.get{attribute_name}(), true);\n'
        elif attribute_type == "int" or attribute_type == "smallint":
            class_code += f'            Inj.Pmt_Integer("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "String":
            class_code += f'            Inj.Pmt_String("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "double":
            class_code += f'            Inj.Pmt_Double("v_{attribute_name}", entity.get{attribute_name}(), false);\n'
        elif attribute_type == "Date":
            class_code += f'            Inj.Pmt_Date("v_{attribute_name}", entity.get{attribute_name}().toString(), false);\n'
        elif attribute_type == "boolean":
            class_code += f'            Inj.Pmt_Boolean("v_{attribute_name}", entity.get{attribute_name}(), false);\n'

    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Add.getValor()) {\n"
    )
    class_code += "                int Id = Inj.RunInsert();\n"
    class_code += "                State = Id > 0;\n"
    class_code += "                if (State) {\n"
    class_code += f"                    entity.set{first_attribute_name}(Id);\n"
    class_code += "                }\n"
    class_code += "            }\n"
    class_code += (
        "            if (entity.getAction() == ProcessActionEnum.Update.getValor()) {\n"
    )
    class_code += "                Inj.RunUpdate();\n"
    class_code += "            }\n\n"
    class_code += "        } catch (Exception ex) {\n"
    class_code += (
        '            throw new UnsupportedOperationException("Datalater : " + ex);\n'
    )
    class_code += "        }\n"
    class_code += "        return entity;\n"
    class_code += "    }\n\n"

    class_code += "    public Boolean Delete(Integer Id) {\n\n"
    class_code += "        Boolean State = false;\n"
    class_code += "        try {\n"
    class_code += f'            Inj.Sp("sp_{class_nameSolo}Delete");\n'
    class_code += (
        f'            Inj.Pmt_Integer("v_{first_attribute_name}", Id, false);\n'
    )
    class_code += "            State = Inj.RunDelete() > 0;\n"
    class_code += "        } catch (Exception ex) {\n"
    class_code += "            throw new UnsupportedOperationException(\"Datalater : \" + ex);\n"
    class_code += "        }\n"
    class_code += "        return State;\n"
    class_code += "    }\n\n"

    class_code += "}\n"
    output_file = os.path.join(output_path, f"{class_name}.java")
    with open(output_file, "w") as java_file:
        java_file.write(class_code)









# Generar la clase Java en la carpeta EntityLayer
# output_folder = "EntityLayer"
# if not os.path.exists(output_folder):
#     os.makedirs(output_folder)
# generate_class_from_sql(sql_script, output_folder)
# print(f"Clase Java generada y guardada en '{output_folder}'")

