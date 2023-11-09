import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import TareaService from '../Model/TareaService';
import { useNavigation } from '@react-navigation/native';
import ModalComponent from '../components/ModalComponent';
import { CategoriaEntity } from '../Model/CategoriaEntity';
import { Tarea } from '../Model/Tarea';

const TareasScreen: React.FC = () => {

    type Nav = {
        navigate: (value: string) => void;
    }

    const { navigate } = useNavigation<Nav>()

    const [modalVisible, setModalVisible] = useState(false);
    
    const initialTarea = new Tarea();
    const [selectedItem, setSelectedItem] = useState<Tarea>(initialTarea);

    const openModal = (item: Tarea) => {
          setSelectedItem(item);
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
            <Button title="Agregar" onPress={() => openModal(selectedItem)} />
            {/* <Button title="Crear Tarea" onPress={handleNavegarCrearTarea} /> */}
            <Button title="Actualizar" onPress={cargarTareas} />

            {tareas.map(tarea => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} key={tarea.id}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>{tarea.nombre}</Text>
                        <Text>{tarea.descripcion}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Button title="Eliminar" onPress={() => handleEliminarTarea(tarea.id)} />
                        <Button title="Editar" onPress={() => openModal(tarea)} />
                    </View>
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
