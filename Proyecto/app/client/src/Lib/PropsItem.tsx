import { OrdenPedidoDetalleEntity } from "../Models/OrdenPedidoDetalleEntity";





export type PropsModel = {
    buttonLabel?: string;
    item: any;
    updateState?: any;
    addItemToState?: any;
    toggle?: any
}


export type PropsTable = {
    DataList: any[];
    updateState: any;
    deleteItemFromState: any;
    EsTabla: boolean
}

export type PropsModelDetalle = {
    buttonLabel?: string;
    item: OrdenPedidoDetalleEntity;
    updateState?: any;
    addItemToState?: any;
    toggle?: any
}
export type PropsTableDetalle = {
    DataList: OrdenPedidoDetalleEntity[];
    updateState: any;
    deleteItemFromState: any;
    EsTabla: boolean
}