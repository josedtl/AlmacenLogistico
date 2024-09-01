import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { MercaderiaMainModel } from '../../Models/MercaderiaEntity';
import MercaderiaService from '../../Service/MercaderiaService';
import { Col, Row, Typography, Card, Button, Spin, Input } from 'antd';
import { ButtonMainSecondaryLeft, ButtonMainSecondaryRight, InputSearchMain , ButtonAddMain} from '../../Styles/Button'
import { SizeMainButtonSecondary ,SizeButtonPrimary} from '../../Styles/Type'
import { IconLoad, IconTabla, IconCard, IconReport, IconFiltro, IconAdd } from '../../Styles/Icons'
import { Link } from "react-router-dom";
import * as XLSX from 'xlsx';
function Main() {
  useEffect(() => {
    getItems();
  }, []);
  const sMercaderia = new MercaderiaService();

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
    const itemsg = await sMercaderia.getItems();
    setItems(itemsg);
    console.log(itemsg);
    setCargarPage(false);

  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value.toUpperCase());
  };
  const filterItems = items.filter(fdata =>
    fdata.Descripcion.toLowerCase().includes(Busqueda.toLowerCase())
  );

  const { Title } = Typography;
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
            />

         
          </Link>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button
            onClick={getItems}
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={IconLoad}
          />
          <Button
            onClick={toggle}
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={disabled ? IconTabla : IconCard}
          />
              <button onClick={handleExport}>Exportar a Excel</button>

          <Button
            style={ButtonMainSecondaryLeft}
            size={SizeMainButtonSecondary}
            icon={IconReport}
          />
          <Button
            style={ButtonMainSecondaryRight}
            size={SizeMainButtonSecondary}
            icon={IconFiltro}
          />

        </Col>


        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <Input
            placeholder='Buscar Categoria'
            type="text"
            name="Nombre"
            onChange={onChange}
            value={Busqueda === null ? "" : Busqueda}
            style={InputSearchMain}
            size={SizeMainButtonSecondary}
          />
        </Col>

      </Row>
      <Card>
        <DataTable DataList={filterItems}  EsTabla={disabled} />
      </Card>

    </Spin>

  );
}

export default Main;




