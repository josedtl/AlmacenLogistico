import React, { useState, useEffect } from "react";
import { ClienteEntity } from '../../Models/ClienteEntity';
import ClienteService from '../../Service/ClienteService';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../Styles/Button'
import { Col, Row, Input, Button, Select } from 'antd';
import { IconEnlace } from '../../Styles/Icons'
import { TipoDocumentoIdentidadEntity } from "../../Models/TipoDocumentoIdentidadEntity";
import GeneralService from '../../Service/GeneralService';
const AddEditForm: React.FC<PropsModel> = (props) => {
    const sCliente = new ClienteService();
    // const idNumero = Number(Id?.toString());
    const sGeneral = new GeneralService();
    const initialCliente = new ClienteEntity();
    const [Ent, setEnt] = useState<ClienteEntity>(initialCliente);
    const [ValNumDocumento, setNumDocumento] = useState<string>('');
    const [ValEsEmpresa, setValEsEmpresa] = useState<Boolean>(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

    };

    const onChangeNumDocumento = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumDocumento(e.target.value.toUpperCase());

    };

    const submitFormAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        Ent.Estado = true;
        const savedItem = await sCliente.saveItemCompleto(Ent);
        if (savedItem) {
            // if (FlaState) {
            //     props.updateState(savedItem);
            // }
            // else {
              
            // }
            setEnt(savedItem);
            props.addItemToState(Ent);
            props.toggle();
        }
    };

    useEffect(() => {
        const updatedPerson = props.item;
        console.log(updatedPerson);
        // setEnt(initialCliente);
        if (updatedPerson.ClienteId > 0) {

            CargarUp(updatedPerson.EsEmpresa,updatedPerson.NumDocumento);
        }

        getCargarDatos();
    }, []);


    const CargarUp = async (Fla : Boolean , Num : string) => {


        if (Fla) {
            const Resp_UM = await sGeneral.GetEmpresaBuscaDocumento(Num);
            const Cliente_Empresa: ClienteEntity = new ClienteEntity();
            const ItemCP = Resp_UM[0];

            Cliente_Empresa.NumDocumento = ItemCP.NumeroDocumento;
            Cliente_Empresa.Nombre = ItemCP.RazonSocial;
            Cliente_Empresa.TipoDocumentoId = ItemCP.TipoDocumentoIdentidadId;
            Cliente_Empresa.EsEmpresa = true;
            setNumDocumento(ItemCP.NumeroDocumento);
            setEnt(Cliente_Empresa);
            console.log(Resp_UM)

        } else {

            const Resp_UM = await sGeneral.GetPersonaBuscardocumento(Num);
            const Cliente_PersonaNatural: ClienteEntity = new ClienteEntity();
            const ItemCP = Resp_UM[0];

            Cliente_PersonaNatural.NumDocumento = ItemCP.NumDocumento;
            Cliente_PersonaNatural.Nombre = ItemCP.Nombres;
            Cliente_PersonaNatural.ApellidoPaterno = ItemCP.ApellidoPaterno;
            Cliente_PersonaNatural.ApellidoMaterno = ItemCP.ApellidoMaterno;
            Cliente_PersonaNatural.TipoDocumentoId = ItemCP.TipoDocumentoIdentidadId;
            Cliente_PersonaNatural.EsEmpresa = false;
            setNumDocumento(ItemCP.NumDocumento);
            setEnt(Cliente_PersonaNatural);

        }


    }


    const BuscarEntidad = async () => {


        if (ValEsEmpresa) {
            const Resp_UM = await sGeneral.GetEmpresaBuscaDocumento(ValNumDocumento);
            const Cliente_Empresa: ClienteEntity = new ClienteEntity();
            const ItemCP = Resp_UM[0];

            Cliente_Empresa.NumDocumento = ItemCP.NumeroDocumento;
            Cliente_Empresa.Nombre = ItemCP.RazonSocial;
            Cliente_Empresa.TipoDocumentoId = ItemCP.TipoDocumentoIdentidadId;
            Cliente_Empresa.EsEmpresa = true;
            setEnt(Cliente_Empresa);
            console.log(Resp_UM)

        } else {

            const Resp_UM = await sGeneral.GetPersonaBuscardocumento(ValNumDocumento);
            const Cliente_PersonaNatural: ClienteEntity = new ClienteEntity();
            const ItemCP = Resp_UM[0];

            Cliente_PersonaNatural.NumDocumento = ItemCP.NumDocumento;
            Cliente_PersonaNatural.Nombre = ItemCP.Nombres;
            Cliente_PersonaNatural.ApellidoPaterno = ItemCP.ApellidoPaterno;
            Cliente_PersonaNatural.ApellidoMaterno = ItemCP.ApellidoMaterno;
            Cliente_PersonaNatural.TipoDocumentoId = ItemCP.TipoDocumentoIdentidadId;
            Cliente_PersonaNatural.EsEmpresa = false;
            setEnt(Cliente_PersonaNatural);

        }


    }

    async function getCargarDatos() {
        const Resp_UM = await sGeneral.GetTipoDocumentoIdentidadPorEstadoItems();
        setOptionsTipoDocumentoIdentidad(Resp_UM);

    }

    const [optionsTipoDocumentoIdentidad, setOptionsTipoDocumentoIdentidad] = useState<TipoDocumentoIdentidadEntity[]>([]);
    const [ValTipoDocuemntoIdentidad, setValTipoDocuemntoIdentidad] = useState<InputStatus>('');

    const onChangeTipoDocuemntoIdentidad = async (value: number) => {
        setValTipoDocuemntoIdentidad('');
        Ent.TipoDocumentoId = value;
        const itemIndex = optionsTipoDocumentoIdentidad.findIndex((data) => data.TipoDocumentoIdentidadId === value);

        if (itemIndex > -1) {

            const ItemsBool = optionsTipoDocumentoIdentidad[itemIndex].EsEmpresa;
            setValEsEmpresa(ItemsBool);
        }

        console.log(value)
    };



    const MostrarResultado = () => {
        if (!ValEsEmpresa) {
            return (
                <>
                    <Row>
                        <Col span={24}>
                            <label>Nombres</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                // suffix={ValCodigoUM}
                                type="text"
                                name="Nombre"
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                onChange={onChange}
                                value={Ent.Nombre === null ? "" : Ent.Nombre}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <label>Apellido Paterno</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                // suffix={ValCodigoUM}
                                type="text"
                                name="ApellidoPaterno"
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                onChange={onChange}
                                value={Ent.ApellidoPaterno === null ? "" : Ent.ApellidoPaterno}
                            />


                        </Col>
                    </Row>


                    <Row>
                        <Col span={24}>
                            <label>Apellido Materno</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                // suffix={ValCodigoUM}
                                type="text"
                                name="ApellidoMaterno"
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                onChange={onChange}
                                value={Ent.ApellidoMaterno === null ? "" : Ent.ApellidoMaterno}
                            />


                        </Col>
                    </Row>
                </>
            )
        }
        else {

            return (

                <>
                    <Row>
                        <Col span={24}>
                            <label>Razon social</label>
                        </Col>
                        <Col span={24}>
                            <Input
                                // suffix={ValCodigoUM}
                                type="text"
                                name="Nombre"
                                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                                onChange={onChange}
                                value={Ent.Nombre === null ? "" : Ent.Nombre}
                            />


                        </Col>
                    </Row>

                </>
            )
        }

    }


    return (
        <>
            <Row>
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
                        value={Ent.TipoDocumentoId === 0 ? null : Ent.TipoDocumentoId}
                        key={Ent.TipoDocumentoId}
                        onChange={onChangeTipoDocuemntoIdentidad}
                    >
                        {optionsTipoDocumentoIdentidad.map((row) => (
                            <Select.Option key={row.TipoDocumentoIdentidadId} value={row.TipoDocumentoIdentidadId}>
                                {row.Alias}
                            </Select.Option>
                        ))}
                    </Select>

                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <label>Numero</label>
                </Col>
                <Col span={24}>
                    <Input
                        // suffix={ValCodigoUM}
                        type="text"
                        name="NumDocumento"
                        style={{ width: '85%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChangeNumDocumento}
                        value={ValNumDocumento === null ? "" : ValNumDocumento}
                    />
                    <Button
                        onClick={BuscarEntidad}
                        style={{ width: '15%', marginTop: '5px', marginBottom: '10px' }}
                        icon={IconEnlace}
                        size={'middle'}
                    />

                </Col>
            </Row>

            {MostrarResultado()}

            <Row>
                <Button
                    onClick={submitFormAdd}
                    style={ButtonAcceptModel}>
                    Aceptar
                </Button>
            </Row>
        </>

    );
}

export default AddEditForm;




