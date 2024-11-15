import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Managers from "./components/managers/Managers";
import AddManager from "./components/managers/AddManager";
import EditManager from "./components/managers/EditManager";
import ViewManager from "./components/managers/ViewManager";
import Agents from "./components/Agents";
import Properties from "./components/Properties";
import ClientDetails from "./components/clientDetails";
import EditClientDetails from "./components/EditClientDetails";
import AuthProvider from "./context/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/managers" element={<Managers />} />
              <Route path="/managers/addmanager" element={<AddManager />} />
              <Route path="/managers/editmanager/:id" element={<EditManager />} />
              <Route path="/managers/viewmanager/:id" element={<ViewManager />} />
              <Route path="/viewagents/:id" element={<Agents />} />
              <Route path="/viewagents" element={<Agents />} />
              <Route path="/viewproperties/:id" element={<Properties />} />
              <Route path="/viewproperties" element={<Properties />} />
              <Route path="/clientDetails/:id" element={<ClientDetails />} />
              <Route path="/editclientdetail/:id" element={<EditClientDetails />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
