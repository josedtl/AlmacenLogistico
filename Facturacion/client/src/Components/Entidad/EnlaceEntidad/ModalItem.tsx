import * as React from 'react';
import AddEditForm from "./FormAddEdit";
import { Button, Modal } from 'antd';
import {ButtonEnlaceEstatico } from '../../../Styles/Button'
import {  SizeButtonEnlace } from '../../../Styles/Type'
import { PropsModel } from '../../../Lib/PropsItem'
import {  IconEnlace } from '../../../Styles/Icons'


const ModalItem: React.FC<PropsModel> = (props) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
    console.log(props.CodigoTabla);
  };
  let button: any = "";
  let title = "";

  button = (
    <Button
      onClick={toggle}
      style={ButtonEnlaceEstatico}
      icon={IconEnlace}
      size={SizeButtonEnlace}
    />
  );
  

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
          CodigoTabla={props.CodigoTabla}
        />
      </Modal>
    </React.Fragment>
  );
}

export default ModalItem;
