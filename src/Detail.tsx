import './App.css';
import Box from '@mui/material/Box';
import { Button, Dialog, DialogContent, TextareaAutosize, TextField } from '@mui/material';
import { useState } from 'react';

function Detail() {
    const [isOpen, setIsOpen] = useState(false)

    const handleSave = () => {
        setIsOpen(false)
    }

    return (
        <Box>
            <Box className="App">
                <div style={{ display: "flex", marginLeft: 50 }}>
                    <h1>Detail User</h1>
                </div>
            </Box>
            <div style={{ padding: "40px", display: "flex", gap: "20px", flexDirection: "column", width: "300px" }}>
                <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                    <p>NAMA</p>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                    />
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                    <p>GENDER</p>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                    />
                </div>
                <div style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
                    <p>EMAIL</p>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        variant="filled"
                    />
                </div>
            </div>
            <div style={{ padding: "40px", display: "flex", justifyContent: "space-between" }}>
                <p>DAFTAR POST</p>
                <Button variant='contained' onClick={() => setIsOpen(true)}>Buat Post</Button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "40px", border: "solid 1px blue", padding: "40px", alignItems: "center" }}>
                <div>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus eius obcaecati laboriosam dicta nostrum et nesciunt corrupti ut ipsa sint vero beatae repudiandae aspernatur doloremque eveniet, ex tenetur accusamus?</p>
                </div>
                <Button variant='contained' style={{ width: "100px", height: "fit-content" }}>Delete</Button>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogContent style={{ width: "500px", height: "400px", display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h2>BUAT POST</h2>
                        <Button variant='contained' style={{ height: "fit-content" }} onClick={() => handleSave()}>SIMPAN</Button>
                    </div>
                    <TextField />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        style={{ width: 495 }}
                    />
                </DialogContent>
            </Dialog>
        </Box >
    );
}

export default Detail;
