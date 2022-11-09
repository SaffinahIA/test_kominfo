/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Box from '@mui/material/Box';
import UsePagination from './pagination';
import { useEffect, useState } from 'react';
import { Table } from './Table';
import { Button } from '@mui/material';

// redux
import { useDispatch, useSelector } from "react-redux";
import { setDataUser } from './store/actions/user';
import { useNavigate } from 'react-router-dom';


function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user: any = useSelector((state: IRootState) => state.user);

    const { dataUser } = user;

    console.warn("Isi user : ", { user });
    console.warn("Isi dataUser : ", dataUser);

    const [err, setErr] = useState({})

    useEffect(() => {
        fetch('https://gorest.co.in/public/v2/users')
            .then(response => response.json())
            .then(res => dispatch(setDataUser(res)))
            .catch(err => setErr(err))
    }, [])


    return (
        <Box>
            <Box className="App">
                <Box>
                    <div style={{ display: "flex", marginLeft: 50 }}>
                        <h1>Daftar Pengguna</h1>
                    </div>
                    <Box style={{ marginLeft: 850, marginBottom: 50 }}>
                        <Button variant='contained' onClick={() => navigate("/detail")}>Buat Pengguna</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Table rows={dataUser} />
            </Box>
            <UsePagination />
        </Box>
    );
}

export default Home;
