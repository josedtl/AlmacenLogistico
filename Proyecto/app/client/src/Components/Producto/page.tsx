import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import { ProductoEntity } from '../../Models/Producto/ProductoEntity';
import ProductoService from '../../Service/ProductoService';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import { Card, Button, Spin } from 'antd';
import { RedoOutlined, DownloadOutlined, FileAddFilled } from '@ant-design/icons';
import { Link } from "react-router-dom";
function ProductoSave() {
  useEffect(() => {
    getItems();
  }, []);
  const sProducto = new ProductoService();

  const [items, setItems] = useState<ProductoEntity[]>([]);
  const [CargarPage, setCargarPage] = React.useState(true);



  const updateState = (item: ProductoEntity) => {
    console.log("d");
    const itemIndex = items.findIndex((data) => data.ProductoId === item.ProductoId);
    const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)];
    setItems(newArray);
  };

  const deleteItemFromState = (id: number) => {
    const updatedItems = items.filter((item) => item.ProductoId !== id);
    setItems(updatedItems);
  };

  const getItems = async () => {
    const itemsg = await sProducto.getItems();
    setItems(itemsg);
    setCargarPage(false);

  };


  const { Title } = Typography;
  return (
    <Spin spinning={CargarPage} tip="Cargando" size="large">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Title level={2}> Producto</Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>

          <Link to={`/ProductoSave/0`}>

            <Button
              style={{
                float: "right",
                color: "white",
                backgroundColor: "#15616d",
                borderColor: "#15616d",
                marginRight: "10px"
              }}
              href={`/Producto/${0}`}
              size={"large"}
              icon={<FileAddFilled />}
            />
          </Link>

          <Button
            onClick={getItems}
            style={{
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginRight: "10px"
            }}
            size={"large"}
            icon={<RedoOutlined />}


          />
          <Button
            style={{
              float: "right",
              color: "#15616d",
              backgroundColor: "#E5F8FA",
              borderColor: "#15616d",
              marginRight: "10px"
            }}

            size={"large"}
            icon={<DownloadOutlined />}


          />


        </Col>
      </Row>
      <Card>
        <DataTable DataList={items} updateState={updateState} deleteItemFromState={deleteItemFromState} />
      </Card>

    </Spin>

  );
}

// import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
// import Document, { Head, Html, Main, NextScript } from 'next/document';
// import type { DocumentContext } from 'next/document';

// Page.getInitialProps = async (ctx: DocumentContext) => {
//   const cache = createCache();
//   const originalRenderPage = ctx.renderPage;
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => (
//         <StyleProvider cache={cache}>
//           <App {...props} />
//         </StyleProvider>
//       ),
//     });

//   const initialProps = await Document.getInitialProps(ctx);
//   const style = extractStyle(cache, true);
//   return {
//     ...initialProps,
//     styles: (
//       <>
//         {initialProps.styles}
//         <style dangerouslySetInnerHTML={{ __html: style }} />
//       </>
//     ),
//   };
// };
export default ProductoSave;




