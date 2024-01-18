import os

def generate_class_from_sqlStore(attributesData:[],NameTable, output_path):
    # script = re.sub(r'\([^)]*\)', '', script)
    attributes =[]
    first_attribute_name = ""
    class_code=""
    for line in attributesData:
        java_attribute_type = line['type']
        attribute_name =line['name']
        attributes.append({"name": attribute_name, "type": java_attribute_type})

    first_attribute_name = attributes[0]['name']
    
    class_name = first_attribute_name.replace("Id", "") 
    



    class_code+=f"-- DROP PROCEDURE sp_{class_name}AllItem;\n"
    class_code+=f"-- DROP PROCEDURE sp_{class_name}AllItems;\n"
    class_code+=f"-- DROP PROCEDURE sp_{class_name}Delete;\n"
    class_code+=f"-- DROP PROCEDURE sp_{class_name}_Save;\n"
    class_code+=f"-- DROP PROCEDURE sp_{class_name}_Update;\n\n"

    class_code += f"CREATE PROCEDURE sp_{class_name}AllItems()\n"
    class_code += "BEGIN\n"
    class_code += "  SELECT\n"
    
    Cont = 0
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"    {attribute_name}\n"
        else:
            class_code += f"    {attribute_name},\n"

    class_code += f"  FROM {NameTable};\n"
    class_code += f"END;\n\n"


    class_code += f"CREATE PROCEDURE sp_{class_name}AllItem(IN v_{class_name}Id INT)\n"
    class_code += "BEGIN\n"
    class_code += "  SELECT\n"
    Cont = 0
    for attribute in attributes:
        attribute_name = attribute["name"]
        java_attribute_name = attribute_name[0].lower() + attribute_name[1:]  # Primera letra en minúscula
        attribute_type = attribute["type"]

        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"    {attribute_name}\n"
        else:
            class_code += f"    {attribute_name},\n"

        
    
    class_code += f"  FROM {NameTable} WHERE  {class_name}Id = v_{class_name}Id;\n"
    class_code += f"END;\n\n"

    class_code += f"CREATE PROCEDURE sp_{class_name}_Save(\n"
    Cont = 0
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]

        Cont = Cont + 1
        if(Cont==1):
            class_code += f"    OUT v_{attribute_name} {attribute_type},\n"
        elif  Cont == len(attributes):
            class_code += f"    IN v_{attribute_name} {attribute_type}\n"
        else:
            class_code += f"    IN v_{attribute_name} {attribute_type},\n"

    class_code += f")\n"
    class_code += f"BEGIN\n"
    class_code += f"    INSERT INTO {NameTable} (\n"
    Cont = 0
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        
        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"        {attribute_name}\n"
        else:
            class_code += f"        {attribute_name},\n"

    Cont = 0
    class_code += f") VALUES (\n"
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"        v_{attribute_name}\n"
        else:
            class_code += f"        v_{attribute_name},\n"

    class_code += f"    );\n\n"
    class_code += f"  SET v_{class_name}Id = LAST_INSERT_ID();\n\n"
    class_code += f"END;\n\n"   


    class_code += f"CREATE PROCEDURE sp_{class_name}_Update(\n"
    Cont= 0
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"    IN v_{attribute_name} {attribute_type}\n"
        else:
            class_code += f"    IN v_{attribute_name} {attribute_type},\n"
        

    class_code += f")\n"
    class_code += f"BEGIN\n"
    class_code += f"    UPDATE {NameTable}\n"
    class_code += f"    SET\n"
    
    Cont=0
    for attribute in attributes:
        attribute_name = attribute["name"]
        attribute_type = attribute["type"]
        Cont = Cont + 1
        if Cont == len(attributes):
            class_code += f"        {attribute_name} = v_{attribute_name}\n"
        else:
            class_code += f"        {attribute_name} = v_{attribute_name},\n"

    class_code += f"    WHERE\n"
    class_code += f"        {class_name}Id = v_{class_name}Id;\n"
    class_code += f"END;\n\n"   

    class_code += f"CREATE  PROCEDURE `sp_{class_name}Delete`(IN v_{class_name}Id int)\n"   
    class_code += f"BEGIN\n" 
    class_code += f"  DELETE\n" 
    class_code += f"    FROM {NameTable}\n" 
    class_code += f"  WHERE {class_name}Id = v_{class_name}Id;\n" 
    class_code += f"  END;\n" 

    output_file = os.path.join(output_path, f"{class_name}.sql")
    with open(output_file, "w") as java_file:
        java_file.write(class_code)
