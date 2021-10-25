import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Heading } from './ModalCatchStyles'
import { v4 as uuidv4 } from "uuid";
import { getMyPokemon } from '../../Helpers/getMyPokemon';
const ModalCatch = (props) => {
    const [nickname, setNickname] = useState("")

    const handleCatch = () => {
        console.log("AA", props.poke)
        if (nickname.length > 0) {
            const newPoke = Object.assign(
                {
                    name: nickname, uniqueID: uuidv4(), detailPokemon: props.poke
                }
            )
            const myPokemon = getMyPokemon()
            myPokemon.push(newPoke);
            localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
            console.log("New Poke", JSON.parse(localStorage.getItem("myPokemon")))
            props.onHide(false);
        } else {
            window.alert("Please fill pokemon nickname")
        }
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
                        Catch {props.poke.name}
                    </Heading>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control size="lg" type="text" placeholder="Nickname" value={nickname} onChange={ev => setNickname(ev.target.value)} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => handleCatch()}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCatch
