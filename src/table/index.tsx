import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import user from '../store/reducers/user';

export const Table = (props: TableType) => {
  const { rows } = props;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={16}>
          <Item>
            <TableContainer component={Paper}>
              <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {/* <TableCell> ID</TableCell> */}
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Country</TableCell>

                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map(({ name, email, country }: any) => (
                    <TableRow
                      key={name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <TableCell component="th" scope="row">
                        {id}
                      </TableCell> */}
                      <TableCell align="right">{name}</TableCell>
                      <TableCell align="right">{email}</TableCell>
                      <TableCell align="right">{country}</TableCell>
                      
                      <Button onClick={() => console.warn("Isi name", name)}>Lihat</Button>
                      <Button>Update</Button>
                      <Button>Hapus</Button>
                    </TableRow>
                  ))}
                </TableBody>
              </TableMUI>
            </TableContainer>
          </Item>
        </Grid>
      </Grid>
    </Box >
  );
}