import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormscreen'
import TareasScreen from './screens/TareasScreen'
import CrearTareaScreen from './screens/CrearTareaScreen'
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TareasScreen" component={TareasScreen} />
        <Stack.Screen name="CrearTareaScreen" component={CrearTareaScreen} />
        <Stack.Screen name="HomeScreen" component={HomScreen} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;