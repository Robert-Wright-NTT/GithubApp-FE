import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import MainMenu from "./pages/MainMenu";
import ViewOrganisations from "./pages/ViewOrganisations";
import ManageMemberships from "./pages/ManageMemberships";
import OrganisationOwner from "./pages/OrganisationOwner";
import { OrganisationsProvider } from "./contexts/OrganisationsContext";

function App() {
  return (
    <div className="App">
      <OrganisationsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm></LoginForm>}></Route>
            <Route path="/main" element={<MainMenu></MainMenu>}></Route>
            <Route
              path="/ViewOrganisations"
              element={<ViewOrganisations></ViewOrganisations>}
            ></Route>
            <Route
              path="/ManageMemberships"
              element={<ManageMemberships></ManageMemberships>}
            ></Route>
            <Route
              path="/OrganisationOwner"
              element={<OrganisationOwner></OrganisationOwner>}
            ></Route>
          </Routes>
        </Router>
      </OrganisationsProvider>
    </div>
  );
}

export default App;
