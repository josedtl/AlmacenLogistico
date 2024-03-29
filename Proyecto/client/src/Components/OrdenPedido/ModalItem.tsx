import * as React from 'react';
import { ProductoDetalleModel } from '@/Models/OrdenPedido/ProductoDetalleModel'
import AddEditForm from "@/Components/OrdenPedido/FormAddEdit";
import { Button, Modal } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { EditFilled, FileAddFilled } from '@ant-design/icons';

type Props = {
  buttonLabel?: string;
  item: ProductoDetalleModel;
  updateState?: any;
  addItemToState?: any
}

const ModalItem: React.FC<Props> = (props) => {
  const [modal, setModal] = React.useState(false);
  const [size, setSize] = React.useState<SizeType>('middle');
  const toggle = () => {
    setModal(!modal);
  };
  let button: any = "";
  let title = "";
  const label = props.buttonLabel;

  if (label === "Edit") {
    button = (

      <Button
        onClick={toggle}
        type='dashed'
        style={{ float: "right", marginRight: "10px", color: "#BB9B32", backgroundColor: "white", borderColor: "#BB9B32" }}
        size={size}
        icon={<EditFilled />}
      />
    );
    title = "Editar Modelo";
  } else {
    button = (

      <Button
        onClick={toggle}
        style={{
          float: "right",
          color: "white",
          backgroundColor: "#15616d",
          borderColor: "#15616d",
          marginTop: "25px",
          marginRight: "25px"
        }}
        size={"large"}
        icon={<FileAddFilled />}
      />
    );
    title = "Agregar Modelo";
  }
  return (
    <React.Fragment>
      {button}
      <Modal title={title} open={modal} onOk={toggle}
        width={370}
        onCancel={toggle}

        footer={[
        ]}
      >
        <AddEditForm
          item={props.item}
          addItemToState={props.addItemToState}
          updateState={props.updateState}
          toggle={toggle}
        />
      </Modal>
    </React.Fragment>
  );
}

export default ModalItem;
