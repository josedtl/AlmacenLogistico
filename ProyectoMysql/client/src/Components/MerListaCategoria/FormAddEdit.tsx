import React, { useState, useEffect } from "react";
import { MerListaEntity } from '../../Models/MerListaEntity'
import MerListaService from '../../Service/MerListaService';
import { Form, Grid } from 'antd';
import { Checkbox, Button, Col, Row, Input } from 'antd';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { PropsModel } from '../../Lib/PropsItem'
import { ButtonAcceptModel } from '../../Styles/Button'
import type { CheckboxProps } from 'antd';
const AddEditForm: React.FC<PropsModel> = (props) => {
    const sMerLista = new MerListaService();

    const initialMerLista = new MerListaEntity();
    const [Ent, setEnt] = useState<MerListaEntity>(initialMerLista);
    const [FlaState, setFlaState] = useState<Boolean>(false);
    const [form] = Form.useForm();
    const [ValDato, setValDato] = useState<InputStatus>('');

    const [EstadoRegistrochecked, setEstadoRegistrochecked] = useState(true);


    // const toggleChecked = () => {
    //     setChecked(!checked);
    // };



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
        Ent.EstadoRegistro = EstadoRegistrochecked;
        Ent.CodigoTabla = props.CodigoTabla;
        console.log(Ent)
        const savedItem = await sMerLista.saveItem(Ent);
        if (savedItem) {
            if (FlaState) {
                props.updateState(savedItem);
            }
            else {
                props.addItemToState(savedItem);
            }
            props.toggle();
            setEnt(new MerListaEntity());
        }
    };
    const label = EstadoRegistrochecked ? 'Registro habilitado' : 'Registro deshabilitar';

    const onChangechk: CheckboxProps['onChange'] = (e) => {
        console.log('checked = ', e.target.checked);
        setEstadoRegistrochecked(e.target.checked);
    };
    useEffect(() => {
        const updatedPerson = props.item;
        updatedPerson.Action = updatedPerson.ListaId > 0 ? 3 : 1;
        setFlaState(updatedPerson.ListaId > 0);
        setEnt(updatedPerson);
        setEstadoRegistrochecked(updatedPerson.EstadoRegistro)
        console.log(props.CodigoTabla)
    }, []);

    return (
        <>
            <Row>
                <Col span={24}>
                    <label>Código</label>
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

                <Col span={24}>
                    <Checkbox checked={EstadoRegistrochecked} disabled={false} onChange={onChangechk}>
                        {label}
                    </Checkbox>
                </Col>

            </Row>
            <Row style={{ height: '50px', alignContent: "flex-end", }}>

                <Col span={24} style={{alignContent:"center"}}>

                    <Button
                        onClick={submitFormAdd}
                        style={ButtonAcceptModel}>
                        Aceptar
                    </Button>
                </Col>
            </Row>
        </>
   
    );
}

export default AddEditForm;




