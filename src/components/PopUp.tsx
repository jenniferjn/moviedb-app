import { Button, Image, Modal } from "react-bootstrap";
import { useState } from "react";

import "../styling/PopUp.scss";

function PopUp({show, onClose, data}: {show: boolean, onClose: () => void, data: any}) {

  return (
    <>
      <Modal show={show}
             onHide={onClose}
             centered>
        <Modal.Header className="popup-header border-0 p-0"
                      closeButton>
          <Image src={data?.image_popup}
                 className="popup-image" />
        </Modal.Header>
        <Modal.Body>
          {data?.title}
          <br />
          <br />
          {data?.description}
          <Button className="btn-see-more m-0 border-0 p-2 mt-3"
                  onClick={onClose}>
            See More
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PopUp;