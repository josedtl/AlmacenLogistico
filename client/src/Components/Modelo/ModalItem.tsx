import * as React from 'react';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { ModeloEntity } from '@/Models/ModeloEntity'
import AddEditForm from "@/Components/Modelo/FormAddEdit";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { DialogTitle, IconButton, Dialog, DialogContent } from '@mui/material';
import Close from '@mui/icons-material/Close';
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
  item: ModeloEntity;
  updateState?: any;
  addItemToState?: any
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
        style={{ float: "left", color: '#000000' }}
      >
        <ModeEditOutlineIcon />
      </Button>
    );
    title = "Editar Modelo";
  } else {
    button = (
    

      <Fab
        color="primary"
        size="small"
        onClick={toggle}
        aria-label="add"
        sx={{ background: '#15616d' }}
      >
        <AddIcon />
      </Fab>
    );
    title = "Agregar Modelo";
  }

  return (

    <React.Fragment>
      {button}
      <Dialog
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


      </Dialog>
    </React.Fragment>

  );

}

export default ModalItem;
