import React, { useRef } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, message }) {
    const dialogRef = useRef();

    const handleOutsideClick = (e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <dialog open ref={dialogRef} onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <button className="close-btn" onClick={onClose}>X</button>
                        <h2>{message}</h2>
                    </div>
                </dialog>
            )}
        </>       
  ); 
}

export default Modal;

{/* <>
            <button onClick={() => dialogRef.current.showModal()}>
                Open
            </button>
            <dialog ref={dialogRef}>
                Here is my Modal Content
                <button onClick={() => dialogRef.current.close()}>
                    Close
                </button>
            </dialog>
        </> */}