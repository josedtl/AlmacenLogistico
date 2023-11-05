import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { GetCategoria } from '../api'
import { CategoriaEntity } from '../Model/CategoriaEntity'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'


const HomeScreen = () => {
    const [items, setItems] = useState<CategoriaEntity[]>([]);

    const loadTareas = async () => {
        const res = await GetCategoria()
        setItems(res)
    }

    useEffect(() => {
        loadTareas()
    }, [])

    return (
        <>
            <Layout>
                <TaskList tasks={items} />
            </Layout>
        </>
    )
}

export default HomeScreen
