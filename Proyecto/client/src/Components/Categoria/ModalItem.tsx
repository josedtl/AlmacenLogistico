import * as React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { CategoriaEntity } from '@/Models/CategoriaEntity'
import AddEditForm from "@/Components/Categoria/FormAddEdit";
import AddIcon from '@mui/icons-material/Add';
import { DialogTitle, IconButton, Dialog, DialogContent } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { Button, Popconfirm, message, Modal, Form, Input } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { EditFilled, FileAddFilled } from '@ant-design/icons';
type Props = {
  buttonLabel?: string;
  item: CategoriaEntity;
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
      // <Button
      //   color="warning"
      //   className="btn btn-secondary btn-sm btn-block"
      //   onClick={toggle}
      //   style={{ float: "left", color: '#D68019' }}
      // >
      //   <ModeEditOutlineIcon />
      // </Button>
      <Button
        onClick={toggle}
        type='dashed'
        style={{ float: "right", marginRight: "10px", color: "#D39E3C", backgroundColor: "white", borderColor: "#D39E3C" }}
        size={size}
        icon={<EditFilled />}

      />
      //     <Button
      //     type='dashed'
      //     onClick={() => deleteItem(record.CategoriaId)}
      //     style={{ float: "left", marginRight: "10px", color: "red" ,backgroundColor:"white",borderColor:"red"}}
      //     size={size}
      //     icon={<DeleteFilled />} 
      //     danger
      // />
    );
    title = "Editar Categoria";
  } else {
    button = (

      <Button
        onClick={toggle}
        style={{ color: "white", backgroundColor: "#15616d", borderColor: "#D39E3C" }}
        size={"large"}
        icon={<FileAddFilled />}


      />


      // <Fab
      //   color="primary"
      //   size="small"
      //   onClick={toggle}
      //   aria-label="add"
      //   sx={{ background: '#15616d' }}
      // >
      //   <AddIcon />
      // </Fab>
    );
    title = "Agregar Categoria";
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

      {/* <Dialog
        open={modal}
        fullWidth
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: '#000000',
            color: '#FFFFFF',
            height: 20
          }}
        >
          {title}
          <IconButton sx={{ ml: 'auto', color: '#FFFFFF' }} onClick={toggle}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>

          <AddEditForm
            item={props.item}
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
          />
        </DialogContent>


      </Dialog> */}
    </React.Fragment>

  );

}

export default ModalItem;
