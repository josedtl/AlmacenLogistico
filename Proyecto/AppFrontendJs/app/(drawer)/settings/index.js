import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
export default function SettingsPage() {
  return (
    <>
      <View>
        <Drawer.Screen options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />
        }} />
        <Text style={{ fontSize: 24 }}>St</Text>
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });