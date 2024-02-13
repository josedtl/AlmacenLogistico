import React, { useState, useEffect } from "react";
import { MerListaEntity } from '../../Models/MerListaEntity'
import MerListaService from '../../Service/MerListaService';
import { Form } from 'antd';
import { message, Select, Button, Col, Row, Typography, Modal, Spin, Input, DatePicker } from 'antd';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../Styles/Button'

const AddEditForm: React.FC<PropsModel> = (props) => {
    const sMerLista = new MerListaService();

    const initialMerLista = new MerListaEntity();
    const [Ent, setEnt] = useState<MerListaEntity>(initialMerLista);
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
    
        Ent.FechaRegistro = new Date();
        Ent.CodUsuario = 'adm';

        Ent.CodigoTabla = 'M002';
        const savedItem = await sMerLista.saveItem(Ent);
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
        updatedPerson.Action = updatedPerson.ListaId > 0 ? 3 : 1;
        setFlaState(updatedPerson.ListaId > 0);
        setEnt(updatedPerson);
    }, []);

    return (
        <>
        <Row>
                <Col span={24}>
                    <label>Codigo</label>
                </Col>
                <Col span={24}>
                    <Input
                        status={ValDato}
                        type="text"
                        name="Codigo"
                        style={{ marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                        value={Ent.Codigo === null ? "" : Ent.Codigo}
                    />
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <label>Nombres</label>
                </Col>
                <Col span={24}>
                    <Input
                        status={ValDato}
                        type="text"
                        name="Nombre"
                        style={{ marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                        value={Ent.Nombre === null ? "" : Ent.Nombre}
                    />
                </Col>

            </Row>
            <Row>
                <Col span={24}>
                    <label>Descripción</label>
                </Col>
                <Col span={24}>
                    <Input
                        status={ValDato}
                        type="text"
                        name="Descripcion"
                        style={{ marginTop: '5px', marginBottom: '10px' }}
                        onChange={onChange}
                        value={Ent.Descripcion === null ? "" : Ent.Descripcion}
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
        // <Form form={form} name="formItem" layout="vertical" autoComplete="off">
        //     <Form.Item label="Nombre" rules={[{ required: false }]}>
        //         <Input
        //         status={ValDato}
        //             type="text"
        //             name="Nombre"
        //             onChange={onChange}
        //             value={Ent.Nombre === null ? "" : Ent.Nombre}
        //         />
        //     </Form.Item>





        //     <Form.Item>
        //         <Button
        //             onClick={submitFormAdd}
        //             style={ButtonAcceptModel}>
        //             Aceptar
        //         </Button>
        //     </Form.Item>
        // </Form>
    );
}

export default AddEditForm;




