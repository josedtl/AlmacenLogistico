import { DrawerToggleButton } from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
export default function Page() {
  return (
    <View >
      <Drawer.Screen options={{
        title: "Home",
        headerShown: true,
        headerTransparent: false,
        headerLeft: () => <DrawerToggleButton />
      }} />
      <Text style={{ fontSize: 24 }}>Index page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});