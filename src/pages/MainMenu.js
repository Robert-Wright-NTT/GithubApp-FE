import React from "react";
import { Button, Grid2, Container } from "@mui/material";
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

      <Container maxWidth="sm">
        <Grid2 container rowSpacing={1} columnSpacing={30}>
          <Grid2 size={2}>
            <Button variant="contained" onClick={handleViewOrganisation}>
              View All Organisations
            </Button>
          </Grid2>
          <Grid2 size={2}>
            <Button variant="contained" onClick={handleManageMemberships}>
              Manage Memberships / View Member Requests
            </Button>
          </Grid2>
          <Grid2 size={2}>
            <Button variant="contained" onClick={handleOrganisationOwner}>
              Organisation Owner
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}
