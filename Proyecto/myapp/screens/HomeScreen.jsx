import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { GetCategoria } from '../api'
const HomeScreen = () => {

    const [tasks, setTaks] = useState([])

    const loadTareas = async () => {
        const res = await GetCategoria()
        console.log(res)
        setTaks(res)
    }

    useEffect(() => {

        loadTareas()
        console.log("d");
    }, [])

    return (
        <>

            <View>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => (
                        <Text>{item.Nombre} </Text>
                    )}
                />
            </View>
        </>
    )
}

export default HomeScreen
