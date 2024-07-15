import * as React from 'react';
import AddEditForm from "./FormAddEdit";
import { Button, Modal } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ButtonDetalleAdd, ButtonDetalleEdit, ButtonEnlace, ButtonEnlaceCard } from '../../../Styles/Button'
import { SizeButtonPrimary, SizeButtonDetalle, SizeButtonEnlace } from '../../../Styles/Type'
import { PropsModel } from '../../../Lib/PropsItem'
import { IconEditTable, IconEnlace } from '../../../Styles/Icons'


const ModalItem: React.FC<PropsModel> = (props) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
    // console.log("Edit");
    // console.log(props)

  };
  let button: any = "";
  let title = "";
  const label = props.buttonLabel;

  if (label === "Edit") {
    button = (

      <Button
        onClick={toggle}
        type='dashed'
        style={ButtonDetalleEdit}
        size={SizeButtonDetalle}
        icon={IconEditTable}
      />
    );
    title = "Editar OrdenPedidoDetalle";
  } else if (label === "Enlace") {

    button = (
      <Button
        onClick={toggle}
        style={ButtonEnlace}
        icon={IconEnlace}
        size={SizeButtonEnlace}
      />
    );

    title = "Agregar OrdenPedidoDetalle s";


  } else if (label === "EnlaceCard") {

    button = (
      <EditOutlined
        onClick={toggle}
        style={ButtonEnlaceCard}
      />
    );

    title = "Editar OrdenPedidoDetalle";


  } else {
    button = (

      <Button
        onClick={toggle}
        style={ButtonDetalleAdd}
        size={SizeButtonPrimary}
        icon={<PlusOutlined />}
      >
        Agregar
      </Button>
    );
    title = "Producto";
  }

  return (
    <React.Fragment>
      {button}
      <Modal title={title} open={modal} onOk={toggle}
        width={500}
        onCancel={toggle}

        footer={[
        ]}
      >
        <AddEditForm
          item={props.item}
          addItemToState={props.addItemToState}
          updateState={props.updateState}
          toggle={toggle}
          keyItem={props.keyItem}
        />
      </Modal>
    </React.Fragment>
  );
}

export default ModalItem;
