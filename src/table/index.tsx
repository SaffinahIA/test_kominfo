//import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
//import Grid from '@mui/x-data-grid';
import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { DataGrid } from '@mui/x-data-grid';

function createData(
  id: string,
  name: string,
  email: string,
  gender: string,
  status: string,
  action: string
) {
  return { id, name, email, gender, status, action };
}

//const [action, setAction] = useState (null);

const rows = [
  createData("3791", "Goswami Agarwal", "goswami_agarwal@prohaska-hagenes.info", "female", "active", "view, update, delete"),
  createData('3790', "Rev. Kama Pothuvaal", "pothuvaal_kama_rev@walker-gleichner.org", "male", "active", "view, update, delete"),
  createData('3789', "Brahmabrata Panicker", "brahmabrata_panicker@bauch-weissnat.org", "male", "active","view, update, delete"),
  createData('3788', "Gajadhar Nehru", "nehru_gajadhar@rempel.co", "female","active", "view, update, delete"),
  createData('3787', "Dakshayani Bhattathiri", "dakshayani_bhattathiri@block.org","male", "active","view, update, delete"),
  createData ( '3786', "Suryakantam Butt DVM",  "butt_dvm_suryakantam@reilly.org",  "female",  "active","view, update, delete"),
  createData ( '3785', "Miss Radha Gandhi",  "miss_radha_gandhi@wiza.net",  "male",  "inactive","view, update, delete"),
  createData ( '3784', "Miss Heema Pillai",  "miss_pillai_heema@schulist-hand.biz",  "male",  "active","view, update, delete" ),
  createData ( '3783', "Sen. Malti Pandey",  "sen_pandey_malti@jerde-larkin.co",  "female",  "active","view, update, delete"),
  createData ( '3782', "Chandramohan Shukla Esq.",  "shukla_chandramohan_esq@anderson.com",  "male",  "inactive","view, update, delete" ),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={16}>
          <Item>
            <TableContainer component={Paper}>

              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell> ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Gender</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="center">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

            </TableContainer>
          </Item>
        </Grid>
        {/* <Grid xs={6}>
          <Item>
            <TableRow>
              <TableCell align='left'> VIEW</TableCell>
              <TableCell align='left'>UPDATE</TableCell>
              <TableCell align='left'>DELETE</TableCell>

            </TableRow>
          </Item>
        </Grid> */}
      </Grid>

     
    </Box>
  );
}
