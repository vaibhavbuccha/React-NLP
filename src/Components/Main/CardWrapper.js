import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const CardWrapper = ({ title, result }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary">
          {result}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardWrapper;
