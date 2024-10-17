import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid2, Container, Box } from "@mui/material";
export default function OrganisationOwner() {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/main");
  };
  return (
    <div>
      <h1>Organisation Owner</h1>
      <Container maxWidth="lg">
        <Box>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Button variant="contained" onClick={handleHomeButton}>
                Home
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </div>
  );
}
