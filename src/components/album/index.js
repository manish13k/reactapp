import React, { useEffect, useState } from "react";
import { useSearchParams  } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';
import TableHead from './tableHead';
import TableBody from './tableBody';
import { getCall } from '../../services';
import { AlbumAPI, UserAPI } from '../../services/apiUrls';
import Pagination from '../pagination';

const AlbumList = () => {
    const [albumData, setAlbumData] = useState([]);
    const [userdata, setUserData] = useState([]);

    const [searchParams] = useSearchParams();
    const start = parseInt(searchParams.get('start')) || 0;
    const limit = parseInt(searchParams.get('limit')) || 20;

    const fetchAlbumData = async () => {
        const apiUrl = `${AlbumAPI}?_start=${start}&_limit=${limit}`
        const albumData = await getCall(apiUrl);
        let userAllData = '';
        if(userdata.length === 0) {
            userAllData = await getCall(UserAPI);
            setUserData(userAllData);
        }
        setAlbumData(albumData);
    };

    useEffect(() => {
        fetchAlbumData()
    }, [limit, start])

  return (
    <Container>
        <header className="album-header">
            <h2>Album Page</h2>
        </header>
        { albumData.length > 0 ? (
        <Table striped bordered hover size="sm" responsive>
            <TableHead />
            <tbody>
                <TableBody responseData={albumData} userdata={userdata} />
                <Pagination apiUrl={AlbumAPI} pageUrl={`/`} />
            </tbody>
        </Table>
        ) : (
            <Spinner animation="grow" />
        )}
    </Container>
  )
};

export default AlbumList;
