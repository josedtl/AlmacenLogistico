import React, { useState, useEffect } from "react";
import { ClienteEntity } from '../../Models/CLienteEntity';
import ClienteService from '../../Service/ClienteService';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../Styles/Button'
import { now } from "moment";
import { Select, Col, Row, Form, Input, Button } from 'antd';
const AddEditForm: React.FC<PropsModel> = (props) => {
    const sCliente = new ClienteService();

    const initialCliente = new ClienteEntity();
    const [Ent, setEnt] = useState<ClienteEntity>(initialCliente);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [form] = Form.useForm();
    const [ValDato, setValDato] = useState<InputStatus>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValDato('');
        setEnt({
            ...Ent,
            [e.target.name]: e.target.value.toUpperCase()
        });

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
    }, []);

    return (
        <>
            <Row>
                <Col span={24}>
                    <label>Tipo Documento</label>
                </Col>
                <Col span={24}>
                    <Input
                        // suffix={ValCodigoUM}
                        type="text"
                        name="CantidadSolicitado"
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                    // value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
                    />


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
                        name="CantidadSolicitado"
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                    // value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
                    />


                </Col>
            </Row>



            <Row>
                <Col span={24}>
                    <label>Nombres</label>
                </Col>
                <Col span={24}>
                    <Input
                        // suffix={ValCodigoUM}
                        type="text"
                        name="CantidadSolicitado"
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                    // value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
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
                        name="CantidadSolicitado"
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                    // value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
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
                        name="CantidadSolicitado"
                        style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                    // value={Ent.CantidadSolicitado === null ? "" : Ent.CantidadSolicitado}
                    />


                </Col>
            </Row>
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




