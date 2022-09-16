import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function HeaderComponent(props: { operationDate: string }) {
  const { operationDate } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ERP (База)
          </Typography>
          <Typography variant="h6" component="div">
            {operationDate}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
