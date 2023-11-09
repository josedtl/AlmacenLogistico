import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { CategoriaEntity } from '../Model/CategoriaEntity';

interface ModalComponentProps {
  selectedItem: CategoriaEntity | null;
  closeModal: () => void;
}


const ModalComponent: React.FC<ModalComponentProps> = ({ selectedItem, closeModal }) => {
  const [editedText, setEditedText] = useState(selectedItem ? selectedItem.Nombre : '');

  const handleSave = () => {
    if (selectedItem) {
      // Aquí puedes implementar la lógica para guardar la edición del item.
      // Por ejemplo, puedes enviar una solicitud a tu API para actualizar el item en la base de datos.
      console.log(`Item editado: ${selectedItem.CategoriaId} - ${editedText}`);
      closeModal();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Editar Item</Text>
      <TextInput
        style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={(text) => setEditedText(text)}
        value={editedText}
      />
      <Button title="Guardar" onPress={handleSave} />
      <Button title="Cancelar" onPress={closeModal} />
    </View>
  );
};

export default ModalComponent;
