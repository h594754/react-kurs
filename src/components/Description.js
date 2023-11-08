import React, { useState } from "react";
import { Typography, Box, TextField, Switch, Button } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText = "Heisann mannen"

  const [value, setValue] = useState("heihei")
  const [checked, setChecked] = useState(false)
  const [count, setCount] = useState(0)

  console.log(checked)
  console.log(count)

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        En ny dag, en ny mulighet
      </Typography>
      <TextField fullWidth label="Skriv inn passordet ditt for å bli hacket brur" 
        id="fullWidth" value={value} onChange={(e) => setValue(e.target.value)}
      />

      <Switch value={checked} onChange={(e) => setChecked(e.target.checked)} />

      <Button onClick={(e) => setCount(count + 1)}>Klikk meg {count} </Button>

      <Typography variant="body1">{descriptionText}</Typography>
    </Box>
  );
};

export default Description;
