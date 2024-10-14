import React, { useState, useEffect, createContext } from "react";

export const OrganisationContext = createContext();

export const OrganisationsProvider = ({ children }) => {
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7191/api/Github/organisations")
      .then((response) => response.json())
      .then((data) => setOrganisations(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <OrganisationContext.Provider value={organisations}>
      {children}
    </OrganisationContext.Provider>
  );
};
