import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { MercaderiaMainModel } from '../../Models/MercaderiaEntity';
import MercaderiaService from '../../Service/MercaderiaService';
import { Col, Row, Typography, Card, Button, Spin, Input, Select } from 'antd';
import { ButtonMainSecondaryLeft, ButtonMainSecondaryRight, InputSearchMain, ButtonAddMain, ButtonAddMainRight, ButtonMainSBuscarRight, ButtonMainLimpiar } from '../../Styles/Button'
import { SizeMainButtonSecondary, SizeButtonPrimary } from '../../Styles/Type'
import { IconLoad, IconTabla, IconCard, IconReport, IconFiltro, IconAdd } from '../../Styles/Icons'
import { Link } from "react-router-dom";
import * as XLSX from 'xlsx';
import MerListaService from '../../Service/MerListaService';
import { MerListaEntity } from '../../Models/MerListaEntity';
import { MercaderiaFiltroModel } from '../../Models/Filtro/MercaderiaFiltroModel';
function Main() {
  useEffect(() => {
    setCargarPage(false);
    // getItems();
  }, []);

  const sMerLista = new MerListaService();
  const sMercaderia = new MercaderiaService();

  const initialFiltro = new MercaderiaFiltroModel();
  const [EntFitro, setEntFiltro] = useState<MercaderiaFiltroModel>(initialFiltro);
  const [items, setItems] = useState<MercaderiaMainModel[]>([]);
  const [CargarPage, setCargarPage] = React.useState(true);
  const [disabled, setDisabled] = useState(false);
  const [Busqueda, setBusqueda] = useState<string>('');
  const toggle = () => {
    setDisabled(!disabled);
  };

  // const handleExport = () => {
  //   // Crea una hoja de trabajo con los datos
  //   const worksheet = XLSX.utils.json_to_sheet(filterItems);

  //   // Crea un libro de trabajo y agrega la hoja
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  //   // Genera el archivo Excel y lo descarga
  //   XLSX.writeFile(workbook, 'data.xlsx');
  // };




  const handleExport = () => {
    // Título
    const title = [['Customer Data']];

    // Datos en formato de matriz
    const dataArray = filterItems.map(item => [item.Cont, item.NomCategoria, item.NomTipoProducto]);

    // Encabezados
    const headers = [['Nº', 'Categoria', 'Tipo']];
    // Combina el título, encabezados y datos
    const combinedData = [...title, ...headers, ...dataArray];

    // Crea una hoja de trabajo con los datos combinados
    const worksheet = XLSX.utils.aoa_to_sheet(combinedData);

    // Estilo para el título (letra más grande y negrita)
    worksheet['A1'].s = {
      font: { sz: 40, bold: true }, // Tamaño de la fuente 16 y negrita
      alignment: { horizontal: 'center' }, // Centrado
    };

    // Combinar celdas para el título
    worksheet['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];

    // Estilo para los encabezados (color de fondo, texto en negrita y bordes)
    const headerStyle = {
      font: { bold: true },
      fill: { fgColor: { rgb: 'FFFF00' } }, // Fondo amarillo
      border: {
        top: { style: 'thin', color: { rgb: '000000' } },
        bottom: { style: 'thin', color: { rgb: '000000' } },
        left: { style: 'thin', color: { rgb: '000000' } },
        right: { style: 'thin', color: { rgb: '000000' } },
      },
    };

    ['A2', 'B2', 'C2'].forEach(cell => {
      worksheet[cell].s = headerStyle;
    });

    // Bordes para los datos
    const dataRange = XLSX.utils.decode_range(worksheet['!ref']!);
    for (let R = 2; R <= dataRange.e.r; ++R) {
      for (let C = 0; C <= dataRange.e.c; ++C) {
        const cell_address = XLSX.utils.encode_cell({ r: R, c: C });
        if (!worksheet[cell_address]) continue;
        worksheet[cell_address].s = {
          border: {
            top: { style: 'thin', color: { rgb: '000000' } },
            bottom: { style: 'thin', color: { rgb: '000000' } },
            left: { style: 'thin', color: { rgb: '000000' } },
            right: { style: 'thin', color: { rgb: '000000' } },
          },
        };
      }
    }

    // Crea un libro de trabajo y agrega la hoja
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Genera el archivo Excel y lo descarga
    XLSX.writeFile(workbook, 'Producto.xlsx');
  };


  const getItems = async () => {
    setCargarPage(true);
    const itemsg = await sMercaderia.getItems();
    setItems(itemsg);
    console.log(itemsg);
    setCargarPage(false);

  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntFiltro({
      ...EntFitro,
      [e.target.name]: e.target.value.toUpperCase()
    });

  };
  const filterItems = items.filter(fdata =>
    fdata.Descripcion.toLowerCase().includes(Busqueda.toLowerCase())
  );

  const { Title } = Typography;
  const [selectedCategoria, setSelectedCategoria] = useState<number | undefined>(undefined);
  const [selectedTipoProducto, setSelectedTipoProducto] = useState<number | undefined>(undefined);

  const [optionsTipoProducto, setOptionsTipoProducto] = useState<MerListaEntity[]>([]);
  const [optionsCategoria, setOptionsCategoria] = useState<MerListaEntity[]>([]);
  const handleSearchCategoria = async (value: string) => {
    try {
      const responseCategoria = await sMerLista.getItemLike("M002", value);
      setOptionsCategoria(responseCategoria);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };


  const onChangeCategoria = async (value: number) => {
    EntFitro.CategoriaId = value;
    setSelectedCategoria(value)
  };



  const handleSearchTipoProducto = async (value: string) => {
    try {
      const responseTipoProducto = await sMerLista.getItemLike("M003", value);
      setOptionsTipoProducto(responseTipoProducto);
    } catch (error) {
      console.error('Error al buscar categorías:', error);
    }
  };

  const onChangeTipoProducto = async (value: number) => {
    EntFitro.TipoId = value;
    setSelectedTipoProducto(value)
  };


  const Buscar_Event = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCargarPage(true);
    console.log(EntFitro);
    const itemsg = await sMercaderia.ObtenerMainFiltro(EntFitro);
    setItems(itemsg);
    setCargarPage(false);
  }

  const Limpiar_Event = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCargarPage(true);
    setEntFiltro(new MercaderiaFiltroModel());
    setItems([]);
    setOptionsCategoria([]);
    setOptionsTipoProducto([])
    setSelectedCategoria(0)
    setSelectedTipoProducto(0)
    setCargarPage(false);
  }
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">
      <Row>

        <Col xs={18} sm={18} md={12} lg={12} xl={12}>
          <Title level={2}> Producto</Title>
        </Col>

        <Col xs={6} sm={6} md={12} lg={12} xl={12}>


          <Link to={`/ProductoSave/0`}>
            <Button
              style={ButtonAddMain}
              size={SizeButtonPrimary}
              icon={IconAdd}
            >Nuevo</Button>


          </Link>
          {/* <Button
            onClick={getItems}
            style={ButtonAddMainRight}
            size={SizeMainButtonSecondary}
            icon={IconLoad}
          >
            Refrescar
          </Button> */}
          <Button
            onClick={handleExport}
            style={ButtonAddMainRight}
            size={SizeMainButtonSecondary}
            icon={IconReport}
          >Excel

          </Button>
        </Col>

      </Row>
      <Row>


        <Col xs={2} sm={2} md={2} lg={2} xl={2}>

          <Button
            type='dashed'
            onClick={getItems}
            style={ButtonMainLimpiar}
            size={SizeMainButtonSecondary}
          // icon={IconFiltro}
          >
            Todos
          </Button>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>

          <Button
            type='dashed'
            style={ButtonMainLimpiar}
            size={SizeMainButtonSecondary}
            onClick={Limpiar_Event}
          // icon={IconFiltro}
          >
            Limpiar
          </Button>
        </Col>



        <Col xs={24} sm={5} md={5} lg={5} xl={5}>

          <Row>
            <Col span={24}>
              <label>Categoria</label>
            </Col>
            <Col span={24}>
              <Select
                // status={ValCategoria}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchCategoria}
                value={EntFitro.CategoriaId === 0 ? null : EntFitro.CategoriaId}
                key={EntFitro.CategoriaId}
                onChange={onChangeCategoria}
              >
                {optionsCategoria.map((categoria) => (
                  <Select.Option key={categoria.ListaId} value={categoria.ListaId}>
                    {categoria.Nombre}
                  </Select.Option>
                ))}
              </Select>

            </Col>
          </Row>
        </Col>




        <Col xs={24} sm={5} md={5} lg={5} xl={5}>
          <Row>
            <Col span={24}>
              <label>Tipo</label>
            </Col>
            <Col span={24}>
              <Select
                // status={ValCategoria}
                showSearch
                style={{ width: '100%', marginTop: '5px', marginBottom: '10px' }}
                defaultActiveFirstOption={false}
                filterOption={false}
                onSearch={handleSearchTipoProducto}
                value={EntFitro.TipoId === 0 ? null : EntFitro.TipoId}
                key={EntFitro.TipoId}
                onChange={onChangeTipoProducto}
              >
                {optionsTipoProducto.map((Tipo) => (
                  <Select.Option key={Tipo.ListaId} value={Tipo.ListaId}>
                    {Tipo.Nombre}
                  </Select.Option>
                ))}
              </Select>

            </Col>
          </Row>
        </Col>




        <Col xs={24} sm={8} md={8} lg={8} xl={8}>

          <Row>
            <Col span={24}>
              <label>Codigo / Nombre</label>
            </Col>
            <Col span={24}>
              <Input
                // status={ValCodigo}
                type="text"
                name="Nombre"
                style={{ marginTop: '5px', marginBottom: '10px' }}
                onChange={onChange}
                value={EntFitro.Nombre === null ? "" : EntFitro.Nombre}
              />
            </Col>
          </Row>
          {/* <Input
            placeholder='Buscar Nombre'
            type="text"
            name="Nombre"
            onChange={onChange}
            value={Busqueda === null ? "" : Busqueda}
            style={InputSearchMain}
            size={SizeMainButtonSecondary}
          /> */}
        </Col>

        <Col xs={24} sm={2} md={2} lg={2} xl={2}>
          <Button
            style={ButtonMainSBuscarRight}
            size={SizeMainButtonSecondary}
            onClick={Buscar_Event}

          // icon={IconFiltro}
          >
            Buscar
          </Button>


        </Col>


      </Row>
      <Card>
        <DataTable DataList={filterItems} EsTabla={disabled} />
      </Card>


    </Spin>

  );
}

export default Main;




