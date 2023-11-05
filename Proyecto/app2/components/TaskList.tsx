import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'

export type PropsTable = {
    tasks: any[];
}
const TaskList: React.FC<PropsTable> = (props) =>{
    return (
        <FlatList
        keyExtractor={(item)=>item.CategoriaId}
            data={props.tasks}
            renderItem={({ item }) => (
                <Text>{item.Nombre} </Text>
            )}
        />
    )
}

export default TaskList