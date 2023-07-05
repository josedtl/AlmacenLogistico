import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../Forms/FormAddEdit";
import { IMarca } from '../IMarca'
import { BsFillPencilFill, BsPlusSquareFill } from "react-icons/bs";

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

  let button: any = "";
  let title = "";

  if (label === "Edit") {
    button = (
      <Button
        color="warning"
        className="btn btn-secondary btn-sm btn-block"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        <BsFillPencilFill />
      </Button>
    );
    title = "Editar Marca";
  } else {
    button = (


<a href="#addEmployeeModal"
onClick={toggle}    style={{ float: "right", width: "120px"}}
className="btn btn-success" data-toggle="modal"><i > <BsPlusSquareFill /></i> <span>Agregar</span></a>
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
