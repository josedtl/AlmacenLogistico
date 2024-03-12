import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { message, Select, Button, Col, Row, Typography, Modal, Spin, Input } from 'antd';
import { TipoDocumentoIdentidadEntity } from '../../../Models/TipoDocumentoIdentidadEntity';
import { EmpresaEntity } from '../../../Models/EmpresaEntity';
import EmpresaService from '../../../Service/EmpresaService';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../../Styles/Button'
import 'moment/locale/es';
import { ProcessActionEnum } from '../../../Lib/ResourceModel/Enum'
import EntListaService from '../../../Service/EntListaService';
import { EntListaModel } from '../../../Models/EntListaEntity';
import GeneralService from '../../../Service/GeneralService';
import { UbigeoEntity } from '../../../Models/UbigeoEntity';
const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sEntLista = new EntListaService();
  const sGeneralService = new GeneralService();
  const sEmpresa = new EmpresaService();
  const initialEmpresa = new EmpresaEntity();
  const [Ent, setEnt] = useState<EmpresaEntity>(initialEmpresa);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);



  const [optionsTipoDocumentoIdentidad, setOptionsTipoDocumentoIdentidad] = useState<EntListaModel[]>([]);
  const [optionsUbigeo, setOptionsUbigeo] = useState<UbigeoEntity[]>([]);


  const handleSearchUbigeo = async (value: string) => {
    try {
      const response = await sGeneralService.GetUbigeoItemLikeApi(value);
      setOptionsUbigeo(response);
    } catch (error) {
      console.error('Error al buscar Ubigeo:', error);
    }
  };




  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    // setValCodigo('');
    // setValNombre('');
    // setValDescripcion('');
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };

  const [selectedTipoDocuemntoIdentidad, setSelectedTipoDocuemntoIdentidad] = useState<number | undefined>(undefined);
  const [selectedUbigeo, setselectedUbigeo] = useState<number | undefined>(undefined);

  const [ValTipoDocuemntoIdentidad, setValTipoDocuemntoIdentidad] = useState<InputStatus>('');
  // const [ValNumDocumento, setValNumDocumento] = useState<InputStatus>('');
  // const [ValNombres, setValNombres] = useState<InputStatus>('');
  // const [ValCodigo, setValCodigo] = useState<InputStatus>('');
  const [ValUbigeo, setValUbigeo] = useState<InputStatus>('');
  // const [ValDireccion, setValDireccion] = useState<InputStatus>('');
  // const [ValCorreo, setValCorreo] = useState<InputStatus>('');

  const onChangeTipoDocuemntoIdentidad = async (value: number) => {
    setValTipoDocuemntoIdentidad('');
    Ent.TipoDocumentoIdentidadId = value;
    setSelectedTipoDocuemntoIdentidad(value)
    console.log(value)
  };



  const onChangeUbigeo = async (value: number) => {
    setValUbigeo('');
    Ent.UbigeoId = value;
    setselectedUbigeo(value)
  };






  const [modal, contextHolder] = Modal.useModal();
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const AddEmpresa = async () => {
    console.log(Ent);
    const savedItem = await sEmpresa.saveItem(Ent);
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

    // if (Ent.Codigo === '') {
    //   setValCodigo('error');
    //   messageAdd.open({ type: 'error', content: 'Ingrese Codigo.', });
    //   return;
    // }
    // if (Ent.CategoriaId === 0) {
    //   setValCategoria('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione una categoria.', });
    //   return;
    // }
    // if (Ent.TipoEmpresaId === 0) {
    //   setValTipoEmpresa('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione una tipo de empresa.', });
    //   return;
    // }

    // if (Ent.MarcaId === 0) {
    //   setValMarca('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione una marca.', });
    //   return;
    // }


    // if (Ent.ModeloId === 0) {
    //   setValModelo('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione un Modelo.', });
    //   return;
    // }

    // if (Ent.Nombre === '') {
    //   setValNombre('error');
    //   messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
    //   return;
    // }

    // if (Ent.Descripcion === '') {
    //   setValDescripcion('error');
    //   messageAdd.open({ type: 'error', content: 'Ingrese un Nombre.', });
    //   return;
    // }

    // if (Ent.UnidadMedidaId === 0) {
    //   setValUnidadMedida('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione una unidad de medida.', });
    //   return;
    // }


    modal.confirm({
      title: 'Mensaje del Sistema',
      icon: <ExclamationCircleOutlined />,
      content: '¿Desea guardar el registro?',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      onOk() {

        Ent.CodUsuario = "adm";
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true
        Ent.Action = Ent.EmpresaId == 0 ? ProcessActionEnum.Add : ProcessActionEnum.Update;
        AddEmpresa();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };


  async function getCargarDatos() {


    setCargarPage(true);
    const Resp_UM = await sEntLista.getItems('C001');
    setOptionsTipoDocumentoIdentidad(Resp_UM);


    console.log(idNumero)
    Ent.Action = ProcessActionEnum.Add
    if (idNumero > 0) {

      const Resp_Empresa = await sEmpresa.getItem(idNumero);
      setEnt(Resp_Empresa[0]);
      console.log(Resp_Empresa[0]);

      if (Resp_Empresa[0].UbigeoId != null) {
        const Resp_Ubigeo = await sGeneralService.GetUbigeoApiItem(Resp_Empresa[0].UbigeoId);
        setOptionsUbigeo(Resp_Ubigeo);
      }
    }

    setCargarPage(false);
  };
  useEffect(() => {

    getCargarDatos();
  }, []);

  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> Empresa  {params.Id}</Title> */}
          <Title level={3}> {Ent.EmpresaId > 0 ? 'Empresa' : 'Agregar Empresa'}</Title>
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
            <Col span={10}>
              <Row>
                <Col span={24}>
                  <label>Documento</label>
                </Col>
                <Col span={24}>
                  <Select
                    status={ValTipoDocuemntoIdentidad}
                    allowClear
                    style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                    defaultActiveFirstOption={false}
                    filterOption={false}
                    optionFilterProp="children"
                    value={Ent.TipoDocumentoIdentidadId === 0 ? null : Ent.TipoDocumentoIdentidadId}
                    key={Ent.TipoDocumentoIdentidadId}
                    onChange={onChangeTipoDocuemntoIdentidad}
                  >
                    {optionsTipoDocumentoIdentidad.map((row) => (
                      <Select.Option key={row.ListaId} value={row.ListaId}>
                        {row.Nombre}
                      </Select.Option>
                    ))}
                  </Select>

                </Col>
              </Row>

            </Col>
            <Col span={14}>
              <Row>
                <Col span={24}>
                  <label>Número</label>
                </Col>
                <Col span={24}>
                  <Input
                    // status={ValNumDocumento}
                    type="text"
                    name="NumDocumento"
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.NumDocumento === null ? "" : Ent.NumDocumento}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Razón Social</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValNombres}
                type="text"
                name="Nombres"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Nombres === null ? "" : Ent.Nombres}
              />
            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <label>Nombre Comercial</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValNombres}
                type="text"
                name="NombreComercial"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.NombreComercial === null ? "" : Ent.NombreComercial}
              />
            </Col>
          </Row>



          <Row>
            <Col span={24}>
              <label>Teléfono</label>
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="Telefono"
                // status={ValCorreo}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Telefono === null ? "" : Ent.Telefono}
              />

            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <label>Correo</label>
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="Correo"
                // status={ValCorreo}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Correo === null ? "" : Ent.Correo}
              />

            </Col>
          </Row>





          <Row>
            <Col span={24}>
              <label>Ubigeo</label>
            </Col>
            <Col span={24}>
              <Select className="custom-select"
                status={ValUbigeo}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchUbigeo}
                value={Ent.UbigeoId === 0 ? null : Ent.UbigeoId}
                key={Ent.UbigeoId}
                onChange={onChangeUbigeo}
              >
                {optionsUbigeo.map((row) => (
                  <Select.Option className="custom-option" key={row.UbigeoId} value={row.UbigeoId}>
                    {row.DesUbigeo}
                  </Select.Option>
                ))}
              </Select>

            </Col>
          </Row>


          <Row>
            <Col span={24}>
              <label>Dirección</label>
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="Direccion"
                // status={ValDireccion}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Direccion === null ? "" : Ent.Direccion}
              />
            </Col>
          </Row>





        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>

        </Col>
      </Row>
    </Spin>
  );
};


export default Save;