import React, { memo } from "react";
import { Modal,Image } from 'react-bootstrap';

const DisplayModel = (props) => {
    const { modalData: {title = '', url = '' } , username } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                   <p className="alignCenter">{title.toUpperCase()}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 className="alignCenter">Owner: {username}</h4>
                <div className="alignCenter"><Image src={url} alt={url} /></div>
            </Modal.Body> 
        </Modal>
    );
}

export default memo(DisplayModel);

