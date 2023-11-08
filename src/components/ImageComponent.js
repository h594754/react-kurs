import React from "react";
import { Card } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "coffee.jpg";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <img src={imageUrl} alt="Halla balla" height="500px" width="auto"/>
    </Card>
  );
};

export default ImageComponent;
