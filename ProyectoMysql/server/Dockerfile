# Usa una imagen base oficial de Python
FROM python:3.11.4
# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de requisitos a la ubicación de trabajo
COPY requirements.txt .

# Instala las dependencias especificadas en requirements.txt
RUN pip install -r requirements.txt

# Copia el contenido de tu aplicación al contenedor
COPY . .

# Expone el puerto en el que tu aplicación va a correr
# Cambia este puerto según la configuración de tu aplicación
EXPOSE 8000

# Comando para correr la aplicación
# Reemplaza 'app.py' por el archivo principal de tu aplicación
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
