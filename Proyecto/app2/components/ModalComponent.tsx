import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CategoriaEntity } from '../Model/CategoriaEntity';
import { Tarea } from '../Model/Tarea';

interface ModalComponentProps {
  selectedItem: Tarea | null;
  closeModal: () => void;
}


const ModalComponent: React.FC<ModalComponentProps> = ({ selectedItem, closeModal }) => {
  const [editedText, setEditedText] = useState(selectedItem ? selectedItem.nombre : '');

  const handleSave = () => {
    if (selectedItem) {
      // Aquí puedes implementar la lógica para guardar la edición del item.
      // Por ejemplo, puedes enviar una solicitud a tu API para actualizar el item en la base de datos.
      console.log(`Item editado: ${selectedItem.id} - ${editedText}`);
      closeModal();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Item</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEditedText(text)}
        value={editedText}
        placeholder="Ingresa el texto aquí"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={closeModal}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});



export default ModalComponent;
