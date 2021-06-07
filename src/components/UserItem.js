import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import EditUserForm from './EditUserForm';
import { connect } from 'react-redux';
import { deleteUserAction } from '../actions/userActions';
import './form.css';


//this component represents a single user that's displayed in the
//userlist component
function UserItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="container contShadow">
    <div className="row item_down">
        <div className=""><b>Note Title</b><br/>
      <div className="">{props.user.noteTitle}</div>
      </div><br/>
      <div className=""><b>Date Recorded</b><br/>
      <div className="">{props.user.noteDate}</div>
      </div> <br />
      <div className=""><b>Note Text</b><br/>
      <div className="">{props.user.noteText}</div>
      </div> <br/>
      
      <div className="">
       <p className=" "><b></b>
       <div className="down">
        <Button
         variant="success btn-xs"
          className="editbtn action" 
          onClick={showModal}
          >
          Update Note</Button>
        {/* We setup edit user modal */}
        
        <Modal show={isModalVisible} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Note App Update Selector</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserForm user={props.user} hideModal={hideModal} />
          </Modal.Body>
        </Modal>
        <Button variant="danger btn-xs" className="action"
          onClick={() => {
            props.deleteUserAction(props.user.id);
          }} >
          Delete Note
        </Button>
        </div>
        </p>
      </div>
    </div>
    </div>
  );
}

  let mapDispatchToProps = {
  deleteUserAction,
};

 let mapStateToProps = () => {};

 export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
