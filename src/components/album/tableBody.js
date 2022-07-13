import React, { Fragment, memo } from "react";
import { useNavigate  } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { getUserName, getColorCode, setValue } from '../../helper';

const TableBody = ({ responseData, userdata }) => {
    let navigate = useNavigate();
    
    const handleOnclick = (obj) => {
        setValue(obj);
        navigate('/photo');
    }
    
    return (
        <Fragment>
            { responseData.map((item, index) => {
                const { title = '', thumbnailUrl = 'https://via.placeholder.com/150/01ff', id = 0, userId = 0 } = item;
                const username = getUserName(userdata, userId);
                                
                return (
                    <tr className="link" key={index} onClick={() => handleOnclick({ albumId: id, username: username, title: title })}>
                        <td className="alignCenter" style={{ backgroundColor: getColorCode()[userId] }}><div><Image src={thumbnailUrl} alt={thumbnailUrl} rounded /></div></td>
                        <td>{title}</td>
                        <td>{username}</td>
                    </tr>
                )
            })}
        </Fragment>
    )
}
export default memo(TableBody);

