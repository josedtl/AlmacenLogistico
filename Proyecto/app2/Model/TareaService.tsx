import AsyncStorage from '@react-native-async-storage/async-storage';

class TareaService {
  private static STORAGE_KEY = 'tareas';

  static async crearTarea(tarea: Tarea): Promise<void> {
    try {
      const tareas = await this.obtenerTareas();
      tareas.push(tarea);
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(tareas));
    } catch (error) {
      throw new Error('Error al crear la tarea');
    }
  }

  static async obtenerTareas(): Promise<Tarea[]> {
    try {
      const tareas = await AsyncStorage.getItem(this.STORAGE_KEY);
      return tareas ? JSON.parse(tareas) : [];
    } catch (error) {
      throw new Error('Error al obtener las tareas');
    }
  }

  static async actualizarTarea(tarea: Tarea): Promise<void> {
    try {
      let tareas = await this.obtenerTareas();
      const index = tareas.findIndex(t => t.id === tarea.id);
      if (index !== -1) {
        tareas[index] = tarea;
        await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(tareas));
      }
    } catch (error) {
      throw new Error('Error al actualizar la tarea');
    }
  }

  static async eliminarTarea(id: string): Promise<void> {
    try {
      let tareas = await this.obtenerTareas();
      tareas = tareas.filter(t => t.id !== id);
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(tareas));
    } catch (error) {
      throw new Error('Error al eliminar la tarea');
    }
  }
}

export default TareaService;
