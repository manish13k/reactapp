import React, { Fragment, memo, useState } from "react";
import { Image } from 'react-bootstrap';
import DisplayModel from '../modal'

const TableBody = ({ responseData, username }) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModelData] = useState({});

    const handleClick = (obj) => {
        setModelData(obj);
        setModalShow(true);
    }

    return (
        <Fragment>
            { responseData.map((item, index) => {
                const { title = '', thumbnailUrl = '', url = '' } = item;
                return (
                    <tr key={index}>
                        <td onClick={() => handleClick({'url': url, 'title': title})} className="alignCenter link"><div><Image src={thumbnailUrl} alt={thumbnailUrl} rounded /></div></td>
                        <td>{title}</td>
                    </tr>
                )
            })}
            <DisplayModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                username={username}
                modalData={modalData}
            />
        </Fragment>
    )
}
export default memo(TableBody);

