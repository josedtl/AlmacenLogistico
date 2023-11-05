import React, { ReactNode } from 'react';
import { View,StatusBar,StyleSheet } from 'react-native';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#222f3e" />
            {children}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor: "#222f3e",
        flex: 1,
        alignItems: "center",
    },
    title: {
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
    },
});
export default Layout;
