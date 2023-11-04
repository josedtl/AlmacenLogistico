import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import {GetCategoria} from '../api'
const HomeScreen = () => {


    const loadTareas = async () => {
        const res = await GetCategoria()
        console.log(res);
    }

    useEffect(() => {

        loadTareas()
        console.log("d");
    }, [])

    return (
        <View>
            <Text> textInComponent </Text>
        </View>
    )
}

export default HomeScreen
