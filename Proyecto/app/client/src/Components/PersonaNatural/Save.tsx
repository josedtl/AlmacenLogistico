import React, { useEffect, useState } from 'react';
import { SaveFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs, Table, message, Select, Button, Col, Row, Typography, Modal, Spin, Input, DatePicker, Space } from 'antd';
import { TipoDocumentoIdentidadEntity } from '../../Models/TipoDocumentoIdentidadEntity';
import { SexoEntity } from '../../Models/SexoEntity';
import { EstadoCivilEntity } from '../../Models/EstadoCivilEntity';
import { UbigeoEntity } from '../../Models/UbigeoEntity';
import { PersonaNaturalEntity } from '../../Models/PersonaNaturalEntity';
import GeneralService from '../../Service/GeneralService';
import PersonaNaturalService from '../../Service/PersonaNaturalService';
import MDMarca from '../Marca/ModalItem';
import MDModelo from '../Modelo/ModalItem';
import type { InputStatus } from 'antd/lib/_util/statusUtils'
import { useParams } from 'react-router-dom';
import { ButtonAddMain } from '../../Styles/Button'
import type { DatePickerProps } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import dayjs from 'dayjs';
import { red } from '@ant-design/colors';

const Save = () => {
  const { Id } = useParams();
  const idNumero = Number(Id?.toString());
  const sGeneral = new GeneralService();
  const sPersonaNatural = new PersonaNaturalService();
  const initialPersonaNatural = new PersonaNaturalEntity();
  const [Ent, setEnt] = useState<PersonaNaturalEntity>(initialPersonaNatural);
  const { Title } = Typography;
  const [CargarPage, setCargarPage] = React.useState(true);
  const [FechaNacimientoItem, setFechaNacimientoItem] = useState<string>(moment(Ent.FechaNacimiento).format('DD/MM/YYYY hh:mm'));
  const dateFormat = 'YYYY/MM/DD';

  // const addItemToStateCategoria = async (item: CategoriaEntity) => {
  //   const Resp_Categoria = await sGeneral.GetCategoriaItem(item.CategoriaId);
  //   setOptionsCategoria(Resp_Categoria);
  //   Ent.CategoriaId = Resp_Categoria[0].CategoriaId;

  // };

  // const addItemToStateMarca = async (item: MarcaEntity) => {
  //   const Resp_Marca = await sGeneral.GetMarcaItem(item.MarcaId);
  //   setOptionsMarca(Resp_Marca);
  //   Ent.MarcaId = Resp_Marca[0].MarcaId;

  // };
  // const addItemToStateModelo = async (item: ModeloEntity) => {
  //   const Resp_Modelo = await sGeneral.GetModeloItem(item.ModeloId);
  //   setOptionsModelo(Resp_Modelo);
  //   Ent.ModeloId = Resp_Modelo[0].ModeloId;

  // };
  // const addItemToStateTipoPersonaNatural = async (item: TipoPersonaNaturalEntity) => {
  //   const Resp_TipoPersonaNatural = await sGeneral.GetTipoPersonaNaturalItem(item.TipoPersonaNaturalId);
  //   setOptionsTipoPersonaNatural(Resp_TipoPersonaNatural);
  //   Ent.TipoPersonaNaturalId = Resp_TipoPersonaNatural[0].TipoPersonaNaturalId;

  // };


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
            Tarifa
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


  const [optionsTipoDocumentoIdentidad, setOptionsTipoDocumentoIdentidad] = useState<TipoDocumentoIdentidadEntity[]>([]);
  const [optionsSexo, setOptionsSexo] = useState<SexoEntity[]>([]);
  const [optionsEstadoCivil, setOptionsEstadoCivil] = useState<EstadoCivilEntity[]>([]);
  const [optionsUbigeo, setOptionsUbigeo] = useState<UbigeoEntity[]>([]);


  const handleSearchUbigeo = async (value: string) => {
    try {
      const response = await sGeneral.GetUbigeoItemLike(value);
      setOptionsUbigeo(response);
    } catch (error) {
      console.error('Error al buscar Ubigeo:', error);
    }
  };



  const getCargarDatos = async () => {

    console.log(idNumero)
    if (idNumero > 0) {

      const Resp_PersonaNatural = await sPersonaNatural.getItem(idNumero);

      // const Resp_Categoria = await sGeneral.GetCategoriaItem(Resp_PersonaNatural[0].CategoriaId);
      // setOptionsCategoria(Resp_Categoria);

      // const Resp_TipoPersonaNatural = await sGeneral.GetTipoPersonaNaturalItem(Resp_PersonaNatural[0].TipoPersonaNaturalId);
      // setOptionsTipoPersonaNatural(Resp_TipoPersonaNatural);

      // const Resp_Marca = await sGeneral.GetMarcaItem(Resp_PersonaNatural[0].MarcaId);
      // setOptionsMarca(Resp_Marca);

      // const Resp_Modelo = await sGeneral.GetModeloItem(Resp_PersonaNatural[0].ModeloId);
      // setOptionsModelo(Resp_Modelo);


      setEnt(Resp_PersonaNatural[0]);
    }

    setCargarPage(false);
  };
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {

    setValCodigo('');
    // setValNombre('');
    // setValDescripcion('');
    setEnt({
      ...Ent,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    setFechaNacimientoItem(dateString);
  };
  const [selectedTipoDocuemntoIdentidad, setSelectedTipoDocuemntoIdentidad] = useState<number | undefined>(undefined);
  const [selectedSexo, setSelectedSexo] = useState<number | undefined>(undefined);
  const [selectedEstadoCivil, setSelectedEstadoCivil] = useState<number | undefined>(undefined);
  const [selectedUbigeo, setselectedUbigeo] = useState<number | undefined>(undefined);

  const [ValTipoDocuemntoIdentidad, setValTipoDocuemntoIdentidad] = useState<InputStatus>('');
  const [ValNumDocumento, setValNumDocumento] = useState<InputStatus>('');
  const [ValNombres, setValNombres] = useState<InputStatus>('');
  const [ValApellidoPaterno, setValApellidoPaterno] = useState<InputStatus>('');
  const [ValApellidoMaterno, setValApellidoMaterno] = useState<InputStatus>('');
  const [ValCodigo, setValCodigo] = useState<InputStatus>('');
  const [ValUbigeo, setValUbigeo] = useState<InputStatus>('');
  const [ValDireccion, setValDireccion] = useState<InputStatus>('');
  const [ValTelefono, setValTelefono] = useState<InputStatus>('');
  const [ValCorreo, setValCorreo] = useState<InputStatus>('');
  const [ValSexo, setValSexo] = useState<InputStatus>('');
  const [ValEstadoCivil, setValEstadoCivil] = useState<InputStatus>('');

  const onChangeTipoDocuemntoIdentidad = async (value: number) => {
    setValTipoDocuemntoIdentidad('');
    Ent.TipoDocumentoIdentidadId = value;
    setSelectedTipoDocuemntoIdentidad(value)
    console.log(value)
  };

  const onChangeSexo = async (value: number) => {
    setValSexo('');
    Ent.SexoId = value;
    setSelectedSexo(value)
  };


  const onChangeEstadoCivil = async (value: number) => {
    setValEstadoCivil('');
    Ent.EstadoCivilId = value;
    setSelectedEstadoCivil(value)
  };


  const onChangeUbigeo = async (value: number) => {
    setValUbigeo('');
    Ent.UbigeoId = value;
    setselectedUbigeo(value)
  };






  const [modal, contextHolder] = Modal.useModal();
  const [messageAdd, contextHolderAdd] = message.useMessage();
  const AddPersonaNatural = async () => {
    const savedItem = await sPersonaNatural.saveItem(Ent);
    console.log(savedItem);
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
    // if (Ent.TipoPersonaNaturalId === 0) {
    //   setValTipoPersonaNatural('error');
    //   messageAdd.open({ type: 'error', content: 'Seleccione una tipo de personanatural.', });
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
        Ent.Action = 1;
        Ent.FechaRegistro = new Date();
        Ent.EstadoRegistro = true
        Ent.Action = Ent.PersonaNaturalId == 0 ? 1 : 3;
        AddPersonaNatural();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  };

  async function cargarItem() {

    setCargarPage(true);
    const Resp_UM = await sGeneral.GetTipoDocumentoIdentidadPersonaItems();
    setOptionsTipoDocumentoIdentidad(Resp_UM);

    const Resp_Sexo = await sGeneral.GetSexoItems();
    setOptionsSexo(Resp_Sexo);

    const Resp_EC = await sGeneral.GetEstadoCivilItems();
    setOptionsEstadoCivil(Resp_EC);


    await getCargarDatos();
  }
  useEffect(() => {



    cargarItem();

    setCargarPage(false);
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangeA = (value: string) => {
    console.log(`selected ${value}`);
  };
  
  const onSearchA = (value: string) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOptionA = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">


      {contextHolder}
      {contextHolderAdd}
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <Title level={3}> PersonaNatural  {params.Id}</Title> */}
          <Title level={3}> {Ent.PersonaNaturalId > 0 ? 'PersonaNatural' : 'Agregar PersonaNatural'}</Title>
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
            <Col span={12}>
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
                    value={Ent.TipoDocumentoIdentidadId === 0 ? null : Ent.TipoDocumentoIdentidadId}
                    key={Ent.TipoDocumentoIdentidadId}
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

            </Col>
            <Col span={12}>
              <Row>
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
                    value={Ent.NumDocumento === null ? "" : Ent.NumDocumento}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <label>Nombres</label>
            </Col>
            <Col span={24}>
              <Input
                status={ValNombres}
                type="text"
                name="Nombres"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Nombres === null ? "" : Ent.Nombres}
              />
            </Col>
          </Row>







          <Row>
            <Col span={12}>
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
                    value={Ent.ApellidoPaterno === null ? "" : Ent.ApellidoPaterno}
                  />
                </Col>
              </Row>

            </Col>
            <Col span={12}>
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
                    value={Ent.ApellidoMaterno === null ? "" : Ent.ApellidoMaterno}
                  />
                </Col>
              </Row>
            </Col>
          </Row>












          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Fecha de Nacimiento</label>
                </Col>
                <Col span={24}>
                  <DatePicker
                    onChange={onChangeDate}
                    value={dayjs(FechaNacimientoItem, dateFormat)}
                    // defaultValue={dayjs(FechaEmisionItem, dateFormat)}
                    style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                  />

                </Col>
              </Row>

            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Telefono</label>
                </Col>
                <Col span={24}>
                  <Input
                    type="text"
                    name="Telefono"
                    status={ValTelefono}
                    style={{ marginTop: '5px', marginBottom: '10px' }}
                    onChange={onChangeText}
                    value={Ent.Telefono === null ? "" : Ent.Telefono}
                  />

                </Col>
              </Row>

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
                status={ValCorreo}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Correo === null ? "" : Ent.Correo}
              />

            </Col>
          </Row>





          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Sexo</label>
                </Col>
                <Col span={24}>
                  <Select
                    status={ValSexo}
                    allowClear
                    style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                    defaultActiveFirstOption={false}
                    filterOption={false}
                    value={Ent.SexoId === 0 ? null : Ent.SexoId}
                    key={Ent.SexoId}
                    onChange={onChangeSexo}
                  >
                    {optionsSexo.map((row) => (
                      <Select.Option key={row.SexoId} value={row.SexoId}>
                        {row.Nombre}
                      </Select.Option>
                    ))}
                  </Select>

                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <label>Estado Civil</label>
                </Col>
                <Col span={24}>
                  <Select
                    status={ValEstadoCivil}
                    allowClear
                    style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                    defaultActiveFirstOption={false}
                    filterOption={false}
                    value={Ent.EstadoCivilId === 0 ? null : Ent.EstadoCivilId}
                    key={Ent.EstadoCivilId}
                    onChange={onChangeEstadoCivil}
                  >
                    {optionsEstadoCivil.map((row) => (
                      <Select.Option key={row.EstadoCivilId} value={row.EstadoCivilId}>
                        {row.Nombre}
                      </Select.Option>
                    ))}
                  </Select>

                </Col>
              </Row>
            </Col>
          </Row>





          <Row>
            <Col span={24}>
              <label>Ubigeo</label>
            </Col>
            <Col span={24}>
              <Select
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
                  <Select.Option key={row.UbigeoId} value={row.UbigeoId}>
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
                status={ValDireccion}
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChangeText}
                value={Ent.Direccion === null ? "" : Ent.Direccion}
              />
            </Col>
          </Row>





        </Col>

        <Col xs={24} sm={14} md={16} lg={17} xl={18}>
          <Space wrap>
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              disabled
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              loading
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              allowClear
              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
            <Select
               style={{ border: 'red' }}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChangeA}
              onSearch={onSearchA}
              filterOption={filterOptionA}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          </Space>
        </Col>
      </Row>
    </Spin>
  );
};


export default Save;