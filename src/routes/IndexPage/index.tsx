
import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalAction } from "../../components/Modal"
import "./index.css"

function IndexPage() {
  const [open, setOpen] = useState(false)
  return (
    <div className="img-cont">
      <button onClick={() => setOpen(true)}>open</button>
      <Modal open={open} handleClose={() => setOpen(false)} >
        <ModalFooter>
          <ModalAction title='save' />
          <ModalAction title='cancel' />
        </ModalFooter>
        <ModalHeader title="modal" />
        <ModalBody>
          Hola
        </ModalBody>
      </Modal>
    </div>
  )
}

export default IndexPage