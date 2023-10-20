import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, Table, message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';
import { MarcaEntity } from '../../Models/MarcaEntity';
import { ModeloEntity } from '../../Models/ModeloEntity';
import { OrdenPedidoEntity } from '../../Models/OrdenPedidoEntity';
import GeneralService from '../../Service/GeneralService';
import { UnidadMedidaEntity } from '../../Models/UnidadMedidaEntity';
import OrdenPedidoService from '../../Service/OrdenPedidoService';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../Styles/Button'

const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sOrdenPedido = new OrdenPedidoService();
  const initialOrdenPedido = new OrdenPedidoEntity();
  const [Ent, setEnt] = useState<OrdenPedidoEntity>(initialOrdenPedido);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);


  const columns = [
    {
      title: 'Nº',
      dataIndex: 'Cont',
      key: 'Cont',
      width: '50px',
    },
    {
      title: 'UnidadMeida',
      dataIndex: 'UnidadMeida',
      key: 'UnidadMeida',

    },
    {
      title: 'Cantidad ',
      dataIndex: 'Cantidad',
      key: 'Cantidad',
      width: '80px',
    },
    {
      title: 'Moneda',
      dataIndex: 'Moneda',
      key: 'Moneda',
      width: '100px',
    }, {
      title: 'ValorVenta',
      dataIndex: 'ValorVenta',
      key: 'ValorVenta',
      width: '100px',
    }, {
      title: 'ValorCompra',
      dataIndex: 'ValorCompra',
      key: 'ValorCompra',
      width: '100px',
    }, {
      title: 'Fecha Vigencia',
      dataIndex: 'FechaVigencia',
      key: 'FechaVigencia',
      width: '100px',
    }, {
      title: 'Action',
      key: 'action',
      width: '100px',
      render: (text: any, record: any) => (
        <span>

          {/* <Button
                    type='dashed'
                    onClick={() => deleteItem(record.CategoriaId)}
                    style={{ float: "right", marginRight: "10px", color: "#C64541", backgroundColor: "white", borderColor: "#C64541" }}
                    size={size}
                    icon={<DeleteFilled />}
                />
                <ModalItem
                    buttonLabel="Edit"
                    item={record}
                    updateState={props.updateState}
                /> */}



        </span>
      ),
    },

  ];

  const [TabsItems, setTabsItems] = useState<any>([
    {
      label: (
        < >
          {/* <AndroidOutlined /> */}
          <Title style={{ fontSize: '18px' }}>
            Producto- Detalle
          </Title>
        </>
      ),
      key: 1,
      children:
        <span>

          <Row>
            <Col xs={24}>
              <Table
                columns={columns}
                size="small"
                scroll={{ y: '100%' }}
              />
            </Col>
          </Row >
        </span>
    },

  ]);



  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValCodigo('');
    setValNombre('');
    setValDescripcion('');
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [selectedTipoOrdenPedido, setSelectedTipoOrdenPedido] = useState<number | undefined>(undefined);
  const [selectedMarca, setSelectedMarca] = useState<number | undefined>(undefined);
  const [selectedModelo, setSelectedModelo] = useState<number | undefined>(undefined);
  const [selectedUM, setSelectedUM] = useState<number | undefined>(undefined);

  const [ValCodigo, setValCodigo] = useState<InputStatus>('');
  const [ValCategoria, setValCategoria] = useState<InputStatus>('');
  const [ValTipoOrdenPedido, setValTipoOrdenPedido] = useState<InputStatus>('');
  const [ValMarca, setValMarca] = useState<InputStatus>('');
  const [ValModelo, setValModelo] = useState<InputStatus>('');
  const [ValNombre, setValNombre] = useState<InputStatus>('');
  const [ValDescripcion, setValDescripcion] = useState<InputStatus>('');
  const [ValUnidadMedida, setValUnidadMedida] = useState<InputStatus>('');






  const [modal, contextHolder] = Modal.useModal();
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const AddOrdenPedido = async () => {
    const savedItem = await sOrdenPedido.saveItem(Ent);
    if (savedItem) {

      messageAdd.open({
        type: 'success',
        content: 'Se guardó correctamente.',
      });
    } else {
    }
  }


  const Guardar_Total = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (Ent.Codigo === '') {
      setValCodigo('error');
      messageAdd.open({ type: 'error', content: 'Ingrese Codigo.', });
      return;
    }



    modal.confirm({
      title: 'Mensaje del Sistema',
      icon: <ExclamationCircleOutlined />,
      content: '¿Desea guardar el registro?',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        Ent.CodUsuario = "adm";
        Ent.Action = 1;
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true
        Ent.Action = Ent.OrdenPedidoId == 0 ? 1 : 3;
        AddOrdenPedido();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };


  useEffect(() => {

    setCargarPage(false);
  }, []);

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> OrdenPedido  {params.Id}</Title> */}
          <Title level={3}> {Ent.OrdenPedidoId > 0 ? 'Orden Pedido' : 'Generar Orden Pedido'}</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            style={ButtonAddMain}
            onClick={Guardar_Total}
            size={"large"}
            icon={<SaveFilled />}
          />

        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={10} md={8} lg={7} xl={6}>


        <Row>
            <Col span={24}>
              <label>Estado</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Codigo</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Documento Responsable</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <label>Responsable</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Fecha de Emision</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValCodigo}
                type="text"
                name="Codigo"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Codigo === null ? "" : Ent.Codigo}
              />
            </Col>
          </Row>
















        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          <Tabs
            style={{ marginLeft: '20px' }}
            type="line" items={TabsItems} />
        </Col>
      </Row>
    </Spin>
  );
};


export default Save;