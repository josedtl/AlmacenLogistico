import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TareaService from '../Model/TareaService';

const CrearTareaScreen: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleGuardarTarea = async () => {
    try {
      if (nombre && descripcion) {
        const nuevaTarea = {
          id: Date.now().toString(),
          nombre: nombre,
          descripcion: descripcion,
        };

        await TareaService.crearTarea(nuevaTarea);
        setNombre('');
        setDescripcion('');
        console.log('Tarea creada correctamente:', nuevaTarea);
      } else {
        console.warn('Por favor, completa el nombre y la descripción de la tarea.');
      }
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la tarea"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        value={descripcion}
        onChangeText={text => setDescripcion(text)}
      />
      <Button title="Guardar Tarea" onPress={handleGuardarTarea} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default CrearTareaScreen;
