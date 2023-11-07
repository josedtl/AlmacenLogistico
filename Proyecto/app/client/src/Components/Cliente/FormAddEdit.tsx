import React, { useState, useEffect } from "react";
import { ClienteEntity } from '../../Models/ClienteEntity';
import ClienteService from '../../Service/ClienteService';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../Styles/Button'
import { Col, Row, Form, Input, Button, Select } from 'antd';
import { IconEnlace } from '../../Styles/Icons'
import { TipoDocumentoIdentidadEntity } from "../../Models/TipoDocumentoIdentidadEntity";
import GeneralService from '../../Service/GeneralService';
const AddEditForm: React.FC<PropsModel> = (props) => {
    const sCliente = new ClienteService();
    // const idNumero = Number(Id?.toString());
    const sGeneral = new GeneralService();
    const initialCliente = new ClienteEntity();
    const [Ent, setEnt] = useState<ClienteEntity>(initialCliente);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [form] = Form.useForm();
    const [ValDato, setValDato] = useState<InputStatus>('');
    const [ValNumDocumento, setNumDocumento] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValDato('');
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
        if (Ent.Nombre === '') {
            setValDato('error');
            return;
        }
        const savedItem = await sCliente.saveItem(Ent);
        if (savedItem) {
            if (FlaState) {
                props.updateState(savedItem);
            }
            else {
                props.addItemToState(savedItem);
            }
            props.toggle();
        }
    };

    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.ClienteId > 0 ? 3 : 1;
        setFlaState(updatedPerson.ClienteId > 0);
        setEnt(updatedPerson);
        getCargarDatos();
    }, []);

    const BuscarEntidad = async () => {



        const Resp_UM = await sGeneral.GetBuscardocumento(ValNumDocumento);
        const Cliente_PersonaNatural: ClienteEntity = new ClienteEntity();
        const ItemCP = Resp_UM[0];

        Cliente_PersonaNatural.Nombre = ItemCP.Nombres;
        Cliente_PersonaNatural.ApellidoPaterno = ItemCP.ApellidoPaterno;
        Cliente_PersonaNatural.ApellidoMaterno = ItemCP.ApellidoMaterno;
        Cliente_PersonaNatural.TipoDocumentoId = ItemCP.TipoDocumentoIdentidadId;

        setEnt(Cliente_PersonaNatural);


        console.log(Resp_UM);

    }

    async function getCargarDatos() {
        const Resp_UM = await sGeneral.GetTipoDocumentoIdentidadPersonaItems();
        setOptionsTipoDocumentoIdentidad(Resp_UM);

    }

    const [optionsTipoDocumentoIdentidad, setOptionsTipoDocumentoIdentidad] = useState<TipoDocumentoIdentidadEntity[]>([]);
    const [selectedTipoDocuemntoIdentidad, setSelectedTipoDocuemntoIdentidad] = useState<number | undefined>(undefined);
    const [ValTipoDocuemntoIdentidad, setValTipoDocuemntoIdentidad] = useState<InputStatus>('');
    const onChangeTipoDocuemntoIdentidad = async (value: number) => {
        setValTipoDocuemntoIdentidad('');
        Ent.TipoDocumentoId = value;
        setSelectedTipoDocuemntoIdentidad(value)
        console.log(value)
    };



    const MostrarResultado = () => {
        if (Ent.EsEmpresa) {
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




