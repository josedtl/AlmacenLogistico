import * as React from 'react';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { CategoriaEntity } from '@/Models/CategoriaEntity'
import AddEditForm from "@/Components/Categoria/FormAddEdit";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { DialogTitle, IconButton, Dialog, DialogContent } from '@mui/material';
import Close from '@mui/icons-material/Close';
type Props = {
  buttonLabel?: string;
  item: CategoriaEntity;
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
        style={{ float: "left", color: '#D68019' }}
      >
        <ModeEditOutlineIcon />
      </Button>
    );
    title = "Editar Categoria";
  } else {
    button = (

      <Button
        onClick={toggle}
        variant="contained"
        style={{background: '#15616d' }}
        size="medium"
        // sx={{ background: '#15616d' }}
      >
        <AddIcon />
      </Button>

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
