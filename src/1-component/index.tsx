import React, { Component } from "react";
import Box from '@mui/material/Box';

export default class ClassComponent extends Component {
    render() {
        return (
            <Box>
                <div style={{ display: "flex", marginLeft: 50 }}>
                    <h1>Daftar Pengguna</h1>
                </div>

                <Box style={{ marginLeft: 850, marginBottom: 50 }}>
                    <div>Buat Pengguna</div>
                </Box>



            </Box>


        )
    }
}