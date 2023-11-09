import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import TareaService from '../Model/TareaService';
import { useNavigation } from '@react-navigation/native';
import ModalComponent from '../components/ModalComponent';
import { CategoriaEntity } from '../Model/CategoriaEntity';

const TareasScreen: React.FC = () => {

    type Nav = {
        navigate: (value: string) => void;
    }

    const { navigate } = useNavigation<Nav>()

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CategoriaEntity | null>(null);
  
    const openModal = (item: string) => {
    //   setSelectedItem(item);
      setModalVisible(true);
    };

    const [tareas, setTareas] = useState<Tarea[]>([]);
    const cargarTareas = async () => {
        try {
            const tareas = await TareaService.obtenerTareas();
            setTareas(tareas);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        cargarTareas();
    }, []);

    const handleEliminarTarea = async (id: string) => {
        try {
            await TareaService.eliminarTarea(id);
            const nuevasTareas = await TareaService.obtenerTareas();
            setTareas(nuevasTareas);
        } catch (error) {
            console.error(error);
        }
    };

    const navigation = useNavigation();

    const handleNavegarCrearTarea = () => {
        // navigation.navigate("CrearTareaScreen");
        navigate("CrearTareaScreen")
    };

    return (

        <View>
            <Button title="Crear Tarea" onPress={handleNavegarCrearTarea} />
            <Button title="Actualizar" onPress={cargarTareas} />

            {tareas.map(tarea => (
                <View key={tarea.id}>
                    <Text>{tarea.nombre}</Text>
                    <Text>{tarea.descripcion}</Text>
                    <Button title="Eliminar" onPress={() => handleEliminarTarea(tarea.id)} />
                    <Button title="Editar" onPress={() => openModal('')} />
                </View>
            ))}

            <Modal visible={modalVisible} animationType="slide">
                <ModalComponent
                    selectedItem={selectedItem}
                    closeModal={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
};

export default TareasScreen;
