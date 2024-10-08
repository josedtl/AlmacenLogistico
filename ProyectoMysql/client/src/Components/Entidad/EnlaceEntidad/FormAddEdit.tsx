import React, { useState, useEffect } from "react";
import { Select } from 'antd';
import { Button, Col, Row, Input, message } from 'antd';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../../Styles/Button'

//SERVICE
import EntListaService from '../../../Service/EntListaService';
import GeneralService from '../../../Service/GeneralService';
//ENTITY
import { EntListaModel } from '../../../Models/EntListaEntity';
import { DatosClienteItemModel, TipoEntidadItemModel } from '../../../Models/GeneralEntity'

const AddEditForm: React.FC<PropsModel> = (props) => {
    const sGeneralService = new GeneralService();
    const sEntLista = new EntListaService();


    const initialTipoEntidad = new DatosClienteItemModel();
    const [EntDato, setEntDato] = useState<DatosClienteItemModel>(initialTipoEntidad);


    const [messageAdd, contextHolderAdd] = message.useMessage();

    const [ValCodigo, setValCodigo] = useState<InputStatus>('');
    const [ValNumDocumento, setvalNumDocumento] = useState<InputStatus>('');
    const [ValNombre, setvalNombre] = useState<InputStatus>('');
    const [ValNombreComercial, setvalNombreComercial] = useState<InputStatus>('');
    const [ValApellidoPaterno, setValApellidoPaterno] = useState<InputStatus>('');
    const [ValApellidoMaterno, setValApellidoMaterno] = useState<InputStatus>('');
    const [ValTipoEnt, setValTipoEnt] = useState<InputStatus>('');
    const [ValTipoDocuemntoIdentidad, setValTipoDocuemntoIdentidad] = useState<InputStatus>('');
    const [selectedTipoEnt, setSelectedTipoEnt] = useState<number | undefined>(undefined);
    const [selectedTipoDocuemntoIdentidad, setSelectedTipoDocuemntoIdentidad] = useState<number | undefined>(undefined);

    const [optionsTipoEntidad, setOptionsTipoEntidad] = useState<TipoEntidadItemModel[]>([]);
    const [optionsTipoDocumentoIdentidad, setOptionsTipoDocumentoIdentidad] = useState<EntListaModel[]>([]);

    const onChangeTipoDocuemntoIdentidad = async (value: number) => {
        ValCodigo;
        setValTipoDocuemntoIdentidad('');
        EntDato.TipoDocumentoIdentidadId = value;
        setSelectedTipoDocuemntoIdentidad(value)
        console.log(value)
    };

    const onChangeTipoEnt = async (value: number) => {
        ValCodigo;
        setValTipoEnt('');
        EntDato.TipoEntidadId = value;
        setSelectedTipoEnt(value)
        console.log(value)
    };

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValCodigo('');
        setvalNombre('');
        setvalNombreComercial('');
        setvalNumDocumento('');
        setValApellidoPaterno('');
        setValApellidoMaterno('');
        setEntDato({
            ...EntDato,
            [e.target.name]: e.target.value.toUpperCase()
        });

    };

    const [CargarPage, setCargarPage] = React.useState(true);




    const AddCliente = async () => {

        console.log(EntDato);
        const saveEnlace = await sGeneralService.saveEnlaceEntidad(EntDato);
        console.log(saveEnlace);

        if (saveEnlace) {

            props.addItemToState(saveEnlace);
            props.toggle();
            setEntDato(new DatosClienteItemModel());
        }

    }
    const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        CargarPage
        selectedTipoEnt
        selectedTipoDocuemntoIdentidad;

        if (EntDato.TipoEntidadId === 0) {
            setValTipoEnt('error');
            messageAdd.open({ type: 'error', content: 'Seleccione una Entidad.', });
            return;
        }
        if (EntDato.TipoDocumentoIdentidadId === 0) {
            setValTipoDocuemntoIdentidad('error');
            messageAdd.open({ type: 'error', content: 'Seleccione una Documento de Identidad.', });
            return;
        }
        if (EntDato.NumDocumento.trimEnd() === '') {
            setvalNumDocumento('error');
            messageAdd.open({ type: 'error', content: 'Ingrese Número de Documento.', });
            return;
        }
        if (EntDato.NombreComercial.trimEnd() === '') {
            setvalNombreComercial('error');
            messageAdd.open({ type: 'error', content: 'Ingrese Nombre Comercial.', });
            return;
        }





        EntDato.CodUsuario = "adm";
        AddCliente();


    };





    const getCargarDatos = async () => {

        const Resp_TipoEnt = await sGeneralService.GetTipoEntidadObtenerItems();
        setOptionsTipoEntidad(Resp_TipoEnt);

        const Resp_UM = await sEntLista.getItems('C001');
        setOptionsTipoDocumentoIdentidad(Resp_UM);

        setCargarPage(false);
    };

    useEffect(() => {
        async function cargarItem() {
            setCargarPage(true);
            await getCargarDatos();
        }


        cargarItem();
    }, []);

    const TipoEntidad = () => {
        if (EntDato.TipoEntidadId == 1) {

            return (
                <>
                    <Row>
                        <Col span={24}>
                            <Col span={24}>
                                <label>Tipo Documento</label>
                            </Col>
                            <Col span={24}>
                                <Select
                                    status={ValTipoDocuemntoIdentidad}
                                    allowClear
                                    style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                    defaultActiveFirstOption={false}
                                    filterOption={false}
                                    optionFilterProp="children"
                                    value={EntDato.TipoDocumentoIdentidadId === 0 ? null : EntDato.TipoDocumentoIdentidadId}
                                    key={EntDato.TipoDocumentoIdentidadId}
                                    onChange={onChangeTipoDocuemntoIdentidad}
                                >
                                    {optionsTipoDocumentoIdentidad.map((row) => (
                                        <Select.Option key={row.ListaId} value={row.ListaId}>
                                            {row.Nombre}
                                        </Select.Option>
                                    ))}
                                </Select>

                            </Col>

                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Col span={24}>
                                <label>Numero</label>
                            </Col>
                            <Col span={24}>

                                <Input
                                    status={ValNumDocumento}
                                    type="text"
                                    name="NumDocumento"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.NumDocumento === null ? "" : EntDato.NumDocumento}
                                />
                            </Col>
                        </Col>
                    </Row>

                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <label>Nombre</label>
                            </Col>
                            <Col span={24}>
                                <Input
                                    status={ValNombre}
                                    type="text"
                                    name="Nombres"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.Nombres === null ? "" : EntDato.Nombres}
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <label>Apellido Paterno</label>
                            </Col>
                            <Col span={24}>
                                <Input
                                    status={ValApellidoPaterno}
                                    type="text"
                                    name="ApellidoPaterno"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.ApellidoPaterno === null ? "" : EntDato.ApellidoPaterno}
                                />
                            </Col>
                        </Row>

                    </Col>


                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <label>Apellido Materno</label>
                            </Col>
                            <Col span={24}>
                                <Input
                                    status={ValApellidoMaterno}
                                    type="text"
                                    name="ApellidoMaterno"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.ApellidoMaterno === null ? "" : EntDato.ApellidoMaterno}
                                />
                            </Col>
                        </Row>
                    </Col>

                </>
            )
        } else {
            return (
                <>

                    {contextHolderAdd}
                    <Row>
                        <Col span={24}>
                            <Col span={24}>
                                <label>Tipo Documento</label>
                            </Col>
                            <Col span={24}>


                                <Select
                                    status={ValTipoDocuemntoIdentidad}
                                    allowClear
                                    style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                    defaultActiveFirstOption={false}
                                    filterOption={false}
                                    optionFilterProp="children"
                                    value={EntDato.TipoDocumentoIdentidadId === 0 ? null : EntDato.TipoDocumentoIdentidadId}
                                    key={EntDato.TipoDocumentoIdentidadId}
                                    onChange={onChangeTipoDocuemntoIdentidad}
                                >
                                    {optionsTipoDocumentoIdentidad.map((row) => (
                                        <Select.Option key={row.ListaId} value={row.ListaId}>
                                            {row.Nombre}
                                        </Select.Option>
                                    ))}
                                </Select>

                            </Col>

                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Col span={24}>
                                <label>Numero Documento</label>
                            </Col>
                            <Col span={24}>
                                <Input
                                    status={ValNumDocumento}
                                    type="text"
                                    name="NumDocumento"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.NumDocumento === null ? "" : EntDato.NumDocumento}
                                />
                            </Col>
                        </Col>
                    </Row>

                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <label>Nombre Comercial</label>
                            </Col>
                            <Col span={24}>
                                <Input
                                    status={ValNombreComercial}
                                    type="text"
                                    name="NombreComercial"
                                    style={{ marginTop: '5px', marginBottom: '10px' }}
                                    onChange={onChangeText}
                                    value={EntDato.NombreComercial === null ? "" : EntDato.NombreComercial}
                                />
                            </Col>
                        </Row>
                    </Col>







                </>
            )
        }
    }




    return (
        <>

            <div>

                <Row>
                    <Col xs={24}>
                        <h2>CLIENTE</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} >
                        <Row>
                            <Col span={24}>
                                <Col span={24}>
                                    <label>Tipo Entidad</label>
                                </Col>
                                <Col span={24}>
                                    <Select
                                        status={ValTipoEnt}
                                        allowClear
                                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                        defaultActiveFirstOption={false}
                                        filterOption={false}
                                        optionFilterProp="children"
                                        value={EntDato.TipoEntidadId === 0 ? null : EntDato.TipoEntidadId}
                                        key={EntDato.TipoEntidadId}
                                        onChange={onChangeTipoEnt}
                                    >
                                        {optionsTipoEntidad.map((row) => (
                                            <Select.Option key={row.TipoEntidadId} value={row.TipoEntidadId}>
                                                {row.Nombre}
                                            </Select.Option>
                                        ))}
                                    </Select>

                                </Col>
                            </Col>
                        </Row>



                        {TipoEntidad()}
                    </Col>


                    <Col xs={24} >
                        <Row style={{ height: '50px', alignContent: "flex-end", }}>

                            <Col span={24} style={{ alignContent: "center" }}>

                                <Button

                                    onClick={Guardar_Total}
                                    style={ButtonAcceptModel}>

                                    Aceptar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </div>

        </>

    );

}

export default AddEditForm;




