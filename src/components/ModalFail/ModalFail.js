import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalFail = (props) => {
    return (
        <Modal
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title>Fail Catch</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>failed to catch pokemon {props.name}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFail
