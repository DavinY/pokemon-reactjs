import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { getMyPokemon } from '../../Helpers/getMyPokemon';
import { Heading } from '../ModalCatch/ModalCatchStyles';

const ModalRelasePokemon = (props) => {
    const history = useHistory();
    const handleRealase = () => {
        localStorage.setItem(
            "myPokemon",
            JSON.stringify(getMyPokemon().filter((pokemon) => pokemon.uniqueID !== props.mypoke.uniqueID))
        );
        console.log("AA", JSON.stringify(getMyPokemon().filter((pokemon) => pokemon.uniqueID !== props.mypoke.uniqueID)))
        history.push("/myPokemon");
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <Heading inverse>
                        Relase Pokemon
                    </Heading>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete pokemon {props.mypoke.name}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Catch</Button>
                <Button onClick={() => handleRealase()}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalRelasePokemon;
