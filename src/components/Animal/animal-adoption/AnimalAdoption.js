import React from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

function AnimalAdoption(props) {
  const { open, closeModal, adoption, reserveAdoption } = props;
  return (
    <Modal isOpen={open} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>Confimez votre demande</ModalHeader>
      <ModalBody>
        <p> Vous souhaitez adopter <strong>{adoption.name}</strong> agé de {adoption.age} ans</p>
        <p>Confimez vous votre demande d'adoption ?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={reserveAdoption}>Confirmer ma demande</Button>{' '}
        <Button color="danger" onClick={closeModal}>Annuler</Button>
      </ModalFooter>
    </Modal>
  );
}

export default AnimalAdoption;
