import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import AddIcon from '@mui/icons-material/Add';
import { IMarca } from '@/Models/IMarca'
import TextField from '@mui/material/TextField';
import AddEditForm from "@/Components/Marca/FormAddEdit";
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type Props = {
  buttonLabel?: string;
  item?: IMarca;
  updateState?: any;
  addItemToState?: any;
  className?: any;
}
const ModalItem: React.FC<Props> = (props) => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  let button: any = "";
  let title = "";
  const label = props.buttonLabel;


  if (label === "Edit") {
    button = (
      <Button
        color="warning"
        className="btn btn-secondary btn-sm btn-block"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        <ModeEditOutlineIcon />
      </Button>
    );
    title = "Editar Marca";
  } else {
    button = (
      <Button onClick={toggle} 
      style={{ float: "right", width: "120px" }}
      variant="contained"
     data-toggle="modal">Agregar

        </Button>
    );
    title = "Agregar Marca";
  }

  return (

    <React.Fragment>
      {button}
      {/* <Button onClick={handleOpen}>Open Child Modal</Button> */}
      <Modal
        open={modal}
        onClose={toggle}
        
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 320 }}>
          <h2 >  {title}</h2>
          <AddEditForm
            item={props.item}
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
          />
    
        </Box>
      </Modal>
    </React.Fragment>

  );

}

export default ModalItem;