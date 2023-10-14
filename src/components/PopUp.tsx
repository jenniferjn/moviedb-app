import { Modal } from 'react-bootstrap';

import '../styling/PopUp.scss';
import { useEffect, useState } from 'react';

function PopUp({
  movie,
  url,
  onClose,
}: {
  movie: { order: string; title: string; image: string; logo: string; id: number };
  url: string;
  onClose: () => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => setShow(true), []);

  return (
    <>
      <Modal
        className="modal-xl"
        show={show}
        onHide={() => {
          setShow(false);
          onClose();
        }}
        centered
      >
        <Modal.Header
          className="p-3 pb-2"
          closeButton
        >
          <h4 className="trailer-title fw-bolder p-2 m-0">{movie.title} Trailer</h4>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="1120"
            height="730"
            src={`https://www.youtube.com/embed/${url}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
