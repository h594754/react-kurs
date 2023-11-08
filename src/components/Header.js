import * as React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="https://www.fredrikenes.no" sx={{backgroundColor: "#FFFFFF",
                          pr: 2}}>Trykk her for å få virus</Link>
        <Typography variant="h6" noWrap>
          Et stk testemann  
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
