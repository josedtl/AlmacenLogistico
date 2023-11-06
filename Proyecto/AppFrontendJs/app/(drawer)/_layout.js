import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
export default function Layaot() {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerLeft: () => <DrawerToggleButton />,
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerLeft: () => <DrawerToggleButton />,
        }}
      >

      </Drawer.Screen>
    </Drawer>
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