import React, {useState, useEffect, Fragment} from 'react'
import { useSearchParams, useNavigate  } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Form } from 'react-bootstrap';
import { getCall } from '../../services';
import './pagination.css';

const Pagination = ({ apiUrl = '', pageUrl = '' }) => {
    const [searchParams] = useSearchParams();
    const limit = searchParams.get('pagesize') || 20;
    const pageNum = searchParams.get('pagenum') || 0;
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [perPage, setPerPage] = useState((limit));

    const fetchAlLData = async () => {
        const albumData = await getCall(apiUrl);
        setData(albumData);
    }

    useEffect(() => {
        let isMount = true;
        if (isMount === true) {
            fetchAlLData()
        }
        return () => {
            isMount = false;
        };
    }, []);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage + 1;
        const limit = offset === 0 ? perPage : offset * perPage;
        const start = limit - perPage;
        navigate(`${pageUrl}?start=${start}&limit=${limit}&pagenum=${selectedPage}&pagesize=${perPage}`);
    };

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setPerPage(selectedValue);
        navigate(`${pageUrl}?start=${0}&limit=${selectedValue}&pagenum=${0}&pagesize=${selectedValue}`);
    };

    return (
        <Fragment>
            <tr>
                <td colSpan={4}>
                    <div className='showRecord'>
                        <span>Show Record:</span>
                        <Form.Select aria-label="Default select example" onChange={handleChange} value={limit}>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                        </Form.Select>
                    </div>
                </td>
            </tr>
            <tr className="App">
                <td colSpan={4}>
                    <ReactPaginate
                        pageCount={Math.ceil(data.length / limit)}
                        onPageChange={handlePageClick}
                        forcePage={parseInt(pageNum)}
                        disabledClassName="disabled"
                        previousLabel="previous"
                        nextLabel="next"
                        breakLabel="..."
                        breakClassName="break-me"
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        subContainerClassName="pages pagination"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"/>
                </td> 
            </tr>
        </Fragment>
    );
}

export default Pagination;
