import React, { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    width: '90%',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
  },
};

function ViewUser(props) {
  const { isOpen, onClose, userData } = props;
  
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  console.log('In Modal Compannet');

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // Code to run after the modal has opened (if needed)
  }

  const closeModal = () => {
    setIsOpen(false);
    onClose(); // Call the onClose prop to handle closing the modal from parent component
  }

  const modifyDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const formattedCreatedAt = modifyDate(userData.created_at);
  const formattedUpdatedAt = modifyDate(userData.updated_at);



  return (
    <Modal
  isOpen={isOpen}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="User View Modal"
>
  <div className="modal-header">
    <h5 className="modal-title">User Information</h5>
    <button type="button" className="btn-close" onClick={closeModal}></button>
  </div>
  <div className="modal-body">
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input type="text" className="form-control" id="firstName" value={userData.firstname} readOnly />
    </div>
    <div className="mb-3">
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input type="text" className="form-control" id="lastName" value={userData.lastname} readOnly />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" value={userData.email} readOnly />
    </div>
    <div className="mb-3">
      <label htmlFor="createdAt" className="form-label">Created At</label>
      <input type="text" className="form-control" id="createdAt" value={formattedCreatedAt} readOnly />
    </div>
    <div className="mb-3">
      <label htmlFor="updatedAt" className="form-label">Updated At</label>
      <input type="text" className="form-control" id="updatedAt" value={formattedUpdatedAt} readOnly />
    </div>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
  </div>
</Modal>

  );
}

export default ViewUser;
