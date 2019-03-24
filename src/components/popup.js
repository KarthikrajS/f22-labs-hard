import React from 'react';
import {Modal,Button} from 'react-bootstrap';


class PopUp extends React.Component{

    render(){
        const {confirmCardDelete,closePopup} = this.props;
        return(
            <div className='popup'>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm Delete</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Sure want to delete?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"  onClick={closePopup}>Close</Button>
                        <Button variant="primary" onClick={confirmCardDelete}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default PopUp;