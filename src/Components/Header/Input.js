import { TextField } from "@mui/material";
import React from "react";

const Input = ({ setSentence }) => {
  return (
    <TextField
      fullWidth
      placeholder="Enter Sentence Here.."
      onChange={(e) => setSentence(e?.target?.value)}
      className="input"
      sx={{ color: "rgb(252, 252, 94)" }}
    />
  );
};

export default Input;
