import React from "react";
import { Button, Grid2, Container, Box, Item } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const navigate = useNavigate();

  const handleViewOrganisation = () => {
    navigate("/ViewOrganisations");
  };

  const handleManageMemberships = () => {
    navigate("/ManageMemberships");
  };
  const handleOrganisationOwner = () => {
    navigate("/OrganisationOwner");
  };
  return (
    <div>
      <h1>Main Menu</h1>

      <Container maxWidth="lg">
        <Box>
          <Grid2 container spacing={2}>
            <Grid2 size={4}>
              <Button variant="contained" onClick={handleViewOrganisation}>
                View All Organisations
              </Button>
            </Grid2>
            <Grid2 size={4}>
              <Button variant="contained" onClick={handleManageMemberships}>
                Manage Memberships / View Member Requests
              </Button>
            </Grid2>
            <Grid2 size={4}>
              <Button variant="contained" onClick={handleOrganisationOwner}>
                Organisation Owner
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </div>
  );
}
