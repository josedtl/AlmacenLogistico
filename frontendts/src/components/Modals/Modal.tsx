import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../Forms/FormAddEdit";
import { IMarca } from '../IMarca'

function ModalForm(props: { buttonLabel?: string, item?: IMarca, updateState?: any, addItemToState?: any, className?: any }) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  const label = props.buttonLabel;

  let button:any = "";
  let title = "";

  if (label === "Edit") {
    button = (
      <Button
        color="warning"
        className="btn btn-secondary btn-sm btn-block"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}
      </Button>
    );
    title = "Editar Marca";
  } else {
    button = (
      <Button
        color="success"

        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}
      </Button>
    );
    title = "Agregar Marca";
  }

  return (
    <div>
      {button}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        backdrop={"static"}
        keyboard={false}
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        <ModalBody>
          <AddEditForm
            item={props.item}
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;
