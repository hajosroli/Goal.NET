
import { Button, Modal,Form } from "react-bootstrap";
const EditNameModal = 
({setShowNameModal,
    handleUpdateTeamNameChange,
    setTeamName,
    teamName,
    selectedTeam,
    showNameModal})=> {

const isInputEmpty = teamName.trim() === '';
const handleClose = (event)=> {
        setTeamName(selectedTeam.name)
        setShowNameModal(false)  
}

return (
    <div>
        <Modal show={showNameModal} variant="dark">
          <Modal.Header>Edit Your Team's Name</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdateTeamNameChange(selectedTeam.id)}>
            <Form.Group controlId="formInput">
              <Form.Label> New Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type the new name here..."
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit"
              disabled={isInputEmpty}>Save
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              onClick={() => handleClose()}>Close
            </Button>
          </Form>
          </Modal.Body>
        </Modal>
      </div>)
}

export default EditNameModal;