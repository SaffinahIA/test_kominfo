import './App.css';
import ClassComponent from './1-component';
import Box from '@mui/material/Box';
import ColumnsGrid from './table'
import UsePagination from './pagination';


function App() {
  return (
    <Box>
      <Box className="App">
        <ClassComponent />
      </Box>
      <Box>
       <ColumnsGrid/>
      </Box>
      <UsePagination/>
    </Box>
  );
}

export default App;
