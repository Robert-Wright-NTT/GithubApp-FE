import React, { useContext } from "react";
import {
  Button,
  Grid2,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrganisationsProvider } from "../contexts/OrganisationsContext";
import { OrganisationContext } from "../contexts/OrganisationsContext";

export default function ViewOrganisations() {
  const navigate = useNavigate();

  const organisations = useContext(OrganisationContext);

  const handleHomeButton = () => {
    navigate("/main");
  };

  const handleRaiseRequest = () => {
    navigate("");
  };

  return (
    <div>
      <h1>View Organisations</h1>

      <Container maxWidth="sm">
        <Grid2 container rowSpacing={1} columnSpacing={30}>
          <Grid2 size={2}>
            <Button variant="contained" onClick={handleHomeButton}>
              Home
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={handleRaiseRequest}>
              Raise a request
            </Button>
          </Grid2>
        </Grid2>
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Organisation</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organisations.map((organisation) => (
              <TableRow key={organisation.id}>
                <TableCell align="right">{organisation.name}</TableCell>
                <TableCell align="right">{organisation.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
