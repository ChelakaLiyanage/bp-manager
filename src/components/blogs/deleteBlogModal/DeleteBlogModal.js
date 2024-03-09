import { Button, Modal } from 'react-bootstrap';


const DeleteBlogModal = (props) => {
    const { show, handleClose, handleSubmit } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete the blog?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteBlogModal;