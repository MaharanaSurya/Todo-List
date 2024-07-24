import {React, useState} from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const InputData = () => {
    const [formdata, updateFormData] = useState({userName : "", message :""});
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#99FFCC",
          width: "450px",
          height: "350px",
          margin: "auto",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{fontWeight:"700", color:"#0066FF"}}>Name : </Typography>
          <TextField label="Enter your name" value={formdata.userName} name="userName" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{fontWeight:"700", color:"#0066FF"}}>Message : </Typography>
          <TextField label="Enter your message" value="" />
        </Box>
        <Button variant="contained" sx={{fontSize:"16px", fontWeight:"600", width:"130px"}}>Post</Button>
      </Box>
    </>
  );
};

export default InputData;
